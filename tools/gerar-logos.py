# -*- coding: utf-8 -*-
"""Gera os logos monocromáticos de assets/img/logos/ a partir dos PNGs da marca.

Utilitário offline: NÃO faz parte do site e não roda em deploy nenhum.
Precisa só do Pillow (`pip install Pillow`).

    python tools/gerar-logos.py <pasta-com-os-png> [nome-do-logo-para-recortar-o-icone ...]

O que ele faz e por quê:

1. Converte cada PNG em TINTA PRETA COM TRANSPARÊNCIA. A opacidade de cada pixel
   é o quanto ele se afasta do fundo, não a sua cor. Assim o site guarda uma só
   imagem por marca: no tema claro ela aparece preta, e no escuro o CSS aplica
   `filter: invert(...)` e ela vira branca. Isso também resolve os PNGs que vêm
   com fundo branco sólido, que apareceriam como um retângulo no tema escuro.
2. NORMALIZA O PESO ÓPTICO. Marcas muito "cheias" (SENAI, KOBI) pareceriam
   maiores que marcas "arejadas" na mesma altura, então cada uma é desenhada
   um pouco menor ou maior dentro de uma tela de altura fixa. O CSS só precisa
   de uma regra de altura para todas.
3. Opcionalmente RECORTA O ÍCONE: para um lockup horizontal (ícone + nome), o
   nome fica ilegível na caixa quadrada de 56px da seção de experiência. Passe o
   nome do arquivo como argumento e ele gera também um `<nome>-icon.webp`
   quadrado, com o primeiro bloco de tinta da marca.

Marcas claras sobre fundo escuro (uma caixa preta com o nome vazado, como a da
KOBI) precisam da conta invertida; liste-as em INVERTIDOS.
"""
import os, sys, glob
from PIL import Image

INVERTIDOS = {"kobi"}   # marca clara sobre fundo escuro
H = 120                 # altura da tela dos logos deitados
S = 96                  # lado da tela dos ícones quadrados
ALVO = 0.30             # densidade de tinta de referência

def tinta(caminho, invertido):
    """PNG colorido -> tinta preta cuja opacidade é a distância até o fundo."""
    im = Image.open(caminho).convert("RGBA")
    src = im.load(); w, h = im.size
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0)); dst = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = src[x, y]
            if a == 0:
                continue
            cobertura = max(r, g, b) / 255.0 if invertido else 1.0 - min(r, g, b) / 255.0
            na = int(a * cobertura)
            if na:
                dst[x, y] = (0, 0, 0, na)
    bb = out.getbbox()
    return out.crop(bb) if bb else out

def densidade(im):
    return sum(im.getchannel("A").getdata()) / (255.0 * im.width * im.height)

def recorta_icone(marca):
    """Primeiro bloco de tinta, separado do resto por uma lacuna de colunas vazias."""
    a = marca.getchannel("A"); w, h = marca.size
    vazia = [max(a.crop((x, 0, x + 1, h)).getdata()) < 8 for x in range(w)]
    i = 0
    while i < w and vazia[i]:
        i += 1
    minimo = max(4, int(w * 0.012))
    while i < w:
        if vazia[i]:
            j = i
            while j < w and vazia[j]:
                j += 1
            if j - i >= minimo:
                return marca.crop((0, 0, i, h))
            i = j
        else:
            i += 1
    return None

def main(origem, com_icone):
    destino = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                           "assets", "img", "logos")
    os.makedirs(destino, exist_ok=True)
    marcas = {}
    for p in sorted(glob.glob(os.path.join(origem, "*.png"))):
        nome = os.path.splitext(os.path.basename(p))[0]
        m = tinta(p, nome in INVERTIDOS)
        d = densidade(m)
        marcas[nome] = (m, min(1.15, max(0.78, (ALVO / d) ** 0.4)))
    if not marcas:
        sys.exit("nenhum PNG em " + origem)
    # Referência fixa (o teto do clamp), e não o máximo do conjunto: assim a saída
    # de um logo não muda conforme os outros PNGs que estiverem na pasta.
    maior = 1.15
    for nome, (m, esc) in sorted(marcas.items()):
        mh = max(1, round(H * esc / maior))
        mw = max(1, round(m.width * mh / m.height))
        tela = Image.new("RGBA", (mw, H), (0, 0, 0, 0))
        tela.alpha_composite(m.resize((mw, mh), Image.LANCZOS), (0, (H - mh) // 2))
        tela.save(os.path.join(destino, nome + ".webp"), "WEBP", lossless=True, method=6)
        print("%-24s %3dx%-4d  (use width=%d height=%d no <img>)" % (nome, mw, H, mw, H))
        if nome in com_icone:
            ic = recorta_icone(m)
            if ic is None:
                print("   ! nao achei um icone separavel em %s" % nome); continue
            e = min(S * 0.86 / ic.width, S * 0.86 / ic.height)
            iw, ih = max(1, round(ic.width * e)), max(1, round(ic.height * e))
            quad = Image.new("RGBA", (S, S), (0, 0, 0, 0))
            quad.alpha_composite(ic.resize((iw, ih), Image.LANCZOS), ((S - iw) // 2, (S - ih) // 2))
            quad.save(os.path.join(destino, nome + "-icon.webp"), "WEBP", lossless=True, method=6)
            print("   + %s-icon.webp  %dx%d" % (nome, S, S))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(sys.argv[1], set(sys.argv[2:]))

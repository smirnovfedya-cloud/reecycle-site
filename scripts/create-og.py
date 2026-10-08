from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math
import random

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og.png"
W, H = 1200, 630

INK = "#061b14"
INK_2 = "#0a3023"
PAPER = "#f2f0e8"
MINT = "#c9f5d2"
ORANGE = "#ff5a1f"

bold_path = r"C:\Windows\Fonts\arialbd.ttf"
regular_path = r"C:\Windows\Fonts\arial.ttf"
condensed_path = r"C:\Windows\Fonts\bahnschrift.ttf"

def font(path, size):
    return ImageFont.truetype(path, size)

canvas = Image.new("RGB", (W, H), INK)
draw = ImageDraw.Draw(canvas)

# Quiet technical grid, fading toward the copy.
for x in range(600, W, 42):
    alpha = int(26 * (x - 600) / 600)
    draw.line((x, 0, x, H), fill=(19 + alpha // 4, 53 + alpha // 3, 39 + alpha // 4), width=1)
for y in range(0, H, 42):
    draw.line((600, y, W, y), fill="#0c3024", width=1)

# Brand lockup.
draw.text((66, 46), "ree", font=font(bold_path, 58), fill=PAPER, anchor="la")
draw.text((172, 56), "WASTE REDUCTION\nCOMPANY", font=font(condensed_path, 13), fill="#91a49a", spacing=2)
draw.line((66, 121, 1134, 121), fill="#315044", width=1)
draw.ellipse((1115, 52, 1127, 64), fill=ORANGE)
draw.text((1094, 81), "UAE", font=font(condensed_path, 12), fill=MINT, anchor="ra")

# Main statement.
draw.text((66, 180), "THE WASTE", font=font(bold_path, 70), fill=PAPER)
draw.text((66, 248), "REDUCTION", font=font(bold_path, 92), fill=ORANGE)
draw.text((66, 337), "COMPANY.", font=font(bold_path, 92), fill=PAPER)
draw.text((70, 465), "DIAGNOSE  /  ACTION  /  CONTROL", font=font(condensed_path, 17), fill=MINT)
draw.text((70, 508), "We help UAE businesses reduce waste and recover value from what remains.", font=font(regular_path, 18), fill="#a8b7b0")

# Reduction engine: one waste stream enters, several controlled streams leave.
box = (720, 205, 920, 422)
draw.rounded_rectangle(box, radius=22, fill=ORANGE, outline="#ff8c5d", width=2)
draw.text((746, 232), "REE", font=font(bold_path, 44), fill=INK)
draw.text((748, 287), "OPEN  SORT  WEIGH", font=font(condensed_path, 11), fill=INK_2)
draw.line((748, 317, 891, 317), fill="#b73c10", width=2)
draw.text((748, 339), "DATA + RECOVERY", font=font(condensed_path, 11), fill=INK_2)
for gx in (760, 808, 856):
    draw.ellipse((gx, 376, gx + 22, 398), outline=INK, width=2)
    draw.ellipse((gx + 7, 383, gx + 15, 391), outline=INK, width=1)

random.seed(21)
# Broad incoming waste-particle river.
for i in range(88):
    x = 560 + random.random() * 150
    centre = 313 + math.sin((x - 560) / 28) * 7
    y = centre + random.gauss(0, 29)
    r = random.choice((2, 2, 3, 4))
    colour = random.choice((MINT, "#86aa98", PAPER))
    draw.ellipse((x-r, y-r, x+r, y+r), fill=colour)

# Six downstream streams; recovered routes are bright, residual is quiet.
destinations = [(975, 205), (1008, 249), (1029, 293), (1020, 337), (993, 381), (963, 425)]
for stream_index, (end_x, end_y) in enumerate(destinations):
    start_x, start_y = 932, 313
    colour = MINT if stream_index < 5 else "#71877c"
    for i in range(30):
        t = (i + random.random()) / 30
        x = start_x + (end_x - start_x) * t
        y = start_y + (end_y - start_y) * (t * t * (3 - 2 * t)) + random.gauss(0, 4)
        r = 2 if stream_index < 5 else 3
        draw.ellipse((x-r, y-r, x+r, y+r), fill=colour)

# Value return, intentionally abstract rather than literal currency.
draw.line((1092, 455, 952, 500), fill=ORANGE, width=2)
for x, y, r in ((1077, 459, 5), (1045, 470, 4), (1015, 480, 5), (982, 490, 4), (952, 500, 5)):
    draw.ellipse((x-r, y-r, x+r, y+r), fill=ORANGE)
draw.text((1100, 450), "VALUE BACK", font=font(condensed_path, 11), fill=ORANGE, anchor="ra")

draw.line((66, 584, 1134, 584), fill="#315044", width=1)
draw.text((66, 601), "REECYCLE.APP", font=font(condensed_path, 12), fill="#91a49a")
draw.text((1134, 601), "DUBAI + ABU DHABI", font=font(condensed_path, 12), fill="#91a49a", anchor="ra")

canvas.save(OUTPUT, format="PNG", optimize=True)
print(f"Created {OUTPUT} ({W}x{H})")

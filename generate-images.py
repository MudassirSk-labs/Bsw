#!/usr/bin/env python3
"""Generate PNG images for BSW Outlet website using Pillow."""

from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = "/home/south/bsw-outlet/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Try to use a nice font, fall back to default
def get_font(size):
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/liberation/LiberationSans-Bold.ttf",
    ]
    for p in [paths[0], paths[2], paths[3], paths[1]]:
        try:
            return ImageFont.truetype(p, size)
        except (IOError, OSError):
            continue
    return ImageFont.load_default()


def rounded_rect(draw, xy, radius, fill, outline=None, width=1):
    """Draw a rounded rectangle."""
    x1, y1, x2, y2 = xy
    draw.rounded_rectangle([x1, y1, x2, y2], radius=radius, fill=fill, outline=outline, width=width)


def draw_star(draw, cx, cy, outer_r, inner_r, points=5, fill=(255, 200, 0)):
    """Draw a star shape."""
    import math
    coords = []
    for i in range(points * 2):
        angle = math.pi * i / points - math.pi / 2
        r = outer_r if i % 2 == 0 else inner_r
        coords.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(coords, fill=fill)


# ============================================================
# 1. VIP HERO - Gold crown on dark gradient
# ============================================================
def generate_vip_hero():
    W, H = 800, 500
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background gradient (gold to amber)
    for y in range(H):
        ratio = y / H
        r = int(255 - ratio * 20)
        g = int(215 - ratio * 40)
        b = int(50 + ratio * 10)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Crown base (trapezoid shape)
    crown_color = (255, 215, 0)
    crown_points = [
        (400, 80),   # top center
        (340, 160),  # inner left
        (200, 140),  # left dip
        (100, 200),  # outer left
        (100, 350),  # bottom left
        (700, 350),  # bottom right
        (700, 200),  # outer right
        (600, 140),  # right dip
        (460, 160),  # inner right
    ]
    draw.polygon(crown_points, fill=crown_color, outline=(200, 170, 0), width=3)

    # Crown jewels
    jewel_y = 170
    jewel_positions = [220, 310, 400, 490, 580]
    jewel_colors = [
        (220, 20, 60),   # ruby
        (30, 144, 255),  # sapphire
        (50, 205, 50),   # emerald
        (255, 105, 180), # pink
        (30, 144, 255),  # sapphire
    ]
    for i, (jx, color) in enumerate(zip(jewel_positions, jewel_colors)):
        r = 15
        draw.ellipse([jx - r, jewel_y - r, jx + r, jewel_y + r], fill=color, outline=(255, 255, 255), width=2)
        # Sparkle
        draw.ellipse([jx - 4, jewel_y - 4, jx + 4, jewel_y + 4], fill=(255, 255, 255))

    # Crown band
    draw.rectangle([100, 300, 700, 340], fill=(200, 170, 0), outline=(180, 150, 0), width=2)

    # Text: "VIP"
    font_large = get_font(120)
    bbox = draw.textbbox((0, 0), "VIP", font=font_large)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) / 2, 360), "VIP", fill=(255, 255, 255, 240), font=font_large)

    # Subtitle
    font_small = get_font(30)
    bbox2 = draw.textbbox((0, 0), "BSW OUTLET", font=font_small)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((W - tw2) / 2, 440), "BSW OUTLET", fill=(255, 255, 255, 180), font=font_small)

    # Sparkle dots
    sparkle_pos = [(150, 90), (650, 90), (300, 60), (500, 60)]
    for sx, sy in sparkle_pos:
        draw.ellipse([sx - 3, sy - 3, sx + 3, sy + 3], fill=(255, 255, 200))

    img.save(f"{OUTPUT_DIR}/vip-hero.png")
    print("✓ vip-hero.png")


# ============================================================
# 2. FURNITURE HERO - Couch / sofa
# ============================================================
def generate_furniture_hero():
    W, H = 800, 500
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background gradient - warm blue to purple
    for y in range(H):
        ratio = y / H
        r = int(30 + ratio * 20)
        g = int(50 + ratio * 30)
        b = int(150 - ratio * 20)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Sofa body
    sofa_color = (80, 120, 180)  # denim blue
    sofa_top = 100
    sofa_height = 280
    sofa_width = 500
    sofa_x = (W - sofa_width) // 2

    # Backrest
    draw.rounded_rectangle(
        [sofa_x + 30, sofa_top, sofa_x + sofa_width - 30, sofa_top + 130],
        radius=30, fill=(60, 100, 160), outline=(50, 80, 140), width=3
    )

    # Seat cushions
    cushion_y = sofa_top + 120
    cushion_h = 120
    cushion_colors = [(90, 130, 190), (85, 125, 185), (90, 130, 190)]
    num_cushions = 3
    cw = (sofa_width - 80) // num_cushions
    for i in range(num_cushions):
        cx = sofa_x + 30 + i * (cw + 10)
        draw.rounded_rectangle(
            [cx, cushion_y, cx + cw, cushion_y + cushion_h],
            radius=15, fill=cushion_colors[i], outline=(70, 110, 170), width=2
        )

    # Armrests
    armrest_w = 45
    armrest_h = 180
    # Left
    draw.rounded_rectangle(
        [sofa_x - 20, sofa_top + 60, sofa_x - 20 + armrest_w, sofa_top + 60 + armrest_h],
        radius=15, fill=(70, 110, 170), outline=(50, 80, 140), width=2
    )
    # Right
    draw.rounded_rectangle(
        [sofa_x + sofa_width - armrest_w + 20, sofa_top + 60,
         sofa_x + sofa_width + 20, sofa_top + 60 + armrest_h],
        radius=15, fill=(70, 110, 170), outline=(50, 80, 140), width=2
    )

    # Sofa legs
    leg_color = (40, 40, 50)
    leg_positions = [sofa_x + 50, sofa_x + sofa_width - 50, sofa_x + sofa_width // 2]
    for lx in leg_positions:
        draw.rounded_rectangle(
            [lx - 8, sofa_top + 250, lx + 8, sofa_top + 280],
            radius=4, fill=leg_color
        )

    # Throw pillows
    pillow_colors = [(255, 200, 50), (220, 80, 80)]
    pillow_positions = [
        (sofa_x + 15, sofa_top + 50),
        (sofa_x + sofa_width - 85, sofa_top + 45),
    ]
    for (px, py), pc in zip(pillow_positions, pillow_colors):
        draw.rounded_rectangle(
            [px, py, px + 70, py + 60],
            radius=12, fill=pc, outline=(0, 0, 0, 30), width=1
        )

    # Text
    font_large = get_font(80)
    bbox = draw.textbbox((0, 0), "FURNITURE", font=font_large)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) / 2, 360), "FURNITURE", fill=(255, 255, 255, 240), font=font_large)

    font_small = get_font(25)
    bbox2 = draw.textbbox((0, 0), "at BSW OUTLET", font=font_small)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((W - tw2) / 2, 425), "at BSW OUTLET", fill=(200, 210, 255, 200), font=font_small)

    img.save(f"{OUTPUT_DIR}/furniture-hero.png")
    print("✓ furniture-hero.png")


# ============================================================
# 3. FURNITURE SOFA ICON - smaller square
# ============================================================
def generate_furniture_sofa():
    W, H = 200, 150
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    sofa_color = (100, 140, 200)

    # Backrest
    draw.rounded_rectangle([25, 15, W - 25, 55], radius=12, fill=(80, 120, 180), outline=(60, 100, 160), width=2)

    # Seat
    draw.rounded_rectangle([35, 50, W - 35, 100], radius=8, fill=sofa_color, outline=(80, 120, 180), width=2)

    # Seat cushion line
    draw.line([(W // 2, 52), (W // 2, 98)], fill=(80, 120, 180), width=2)

    # Armrests
    draw.rounded_rectangle([10, 35, 30, 95], radius=8, fill=(80, 120, 180), outline=(60, 100, 160), width=2)
    draw.rounded_rectangle([W - 30, 35, W - 10, 95], radius=8, fill=(80, 120, 180), outline=(60, 100, 160), width=2)

    # Legs
    for lx in [45, W - 45]:
        draw.rounded_rectangle([lx - 4, 100, lx + 4, 125], radius=2, fill=(60, 60, 60))

    # Pillow
    draw.rounded_rectangle([40, 30, 80, 55], radius=8, fill=(255, 200, 50), outline=(230, 170, 30), width=1)

    img.save(f"{OUTPUT_DIR}/furniture-sofa.png")
    print("✓ furniture-sofa.png")


# ============================================================
# 4. SAVINGS HERO - Piggy bank / money concept
# ============================================================
def generate_savings_hero():
    W, H = 900, 400
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background gradient - green
    for y in range(H):
        ratio = y / H
        r = int(20 + ratio * 15)
        g = int(120 + ratio * 80)
        b = int(60 + ratio * 30)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Large Dollar sign
    font_huge = get_font(250)
    bbox = draw.textbbox((0, 0), "$", font=font_huge)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text(((W // 2 - tw) // 2, (H - th) // 2 - 20), "$", fill=(255, 215, 0, 200), font=font_huge)

    # Text
    font_large = get_font(60)
    bbox2 = draw.textbbox((0, 0), "NEVER PAY", font=font_large)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((W - tw2) // 2 + 50, 80), "NEVER PAY", fill=(255, 255, 255, 240), font=font_large)

    bbox3 = draw.textbbox((0, 0), "RETAIL AGAIN", font=font_large)
    tw3 = bbox3[2] - bbox3[0]
    draw.text(((W - tw3) // 2 + 50, 150), "RETAIL AGAIN", fill=(255, 220, 50, 240), font=font_large)

    font_small = get_font(28)
    bbox4 = draw.textbbox((0, 0), "BSW OUTLET  |  MEMPHIS, TN", font=font_small)
    tw4 = bbox4[2] - bbox4[0]
    draw.text(((W - tw4) // 2 + 50, 230), "BSW OUTLET  |  MEMPHIS, TN", fill=(255, 255, 255, 150), font=font_small)

    # Decorative circles
    for cx, cy, r, alpha in [(750, 80, 60, 30), (820, 200, 40, 20), (700, 320, 50, 25)]:
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 215, 0, alpha))

    img.save(f"{OUTPUT_DIR}/savings-hero.png")
    print("✓ savings-hero.png")


# ============================================================
# 5. BARGAIN BIN - Shopping bin / cart concept
# ============================================================
def generate_bargain_bin():
    W, H = 800, 400
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background - warm red gradient
    for y in range(H):
        ratio = y / H
        r = int(200 + ratio * 30)
        g = int(50 + ratio * 20)
        b = int(60 + ratio * 10)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Big bin shape (trapezoid / rectangle)
    bin_color = (180, 60, 70)
    bin_x1, bin_x2 = 80, W - 80
    bin_top_y, bin_bot_y = 60, 300

    # Bin body
    draw.polygon([
        (bin_x1, bin_bot_y),
        (bin_x1 + 20, bin_top_y + 30),
        (bin_x2 - 20, bin_top_y + 30),
        (bin_x2, bin_bot_y),
    ], fill=bin_color, outline=(150, 40, 50), width=3)

    # Bin rim
    draw.rounded_rectangle([bin_x1 - 10, bin_top_y, bin_x2 + 10, bin_top_y + 25],
                           radius=6, fill=(160, 50, 60), outline=(130, 30, 40), width=2)

    # Items sticking out of bin
    # A shirt/rectangle
    draw.rounded_rectangle([bin_x1 + 30, bin_top_y - 50, bin_x1 + 90, bin_top_y + 20],
                           radius=8, fill=(60, 130, 200), outline=(40, 100, 170), width=2)
    # A box
    draw.rounded_rectangle([bin_x2 - 90, bin_top_y - 40, bin_x2 - 20, bin_top_y + 20],
                           radius=5, fill=(200, 160, 60), outline=(170, 130, 40), width=2)
    # A circle item (ball)
    draw.ellipse([W // 2 - 30, bin_top_y - 50, W // 2 + 30, bin_top_y + 10],
                 fill=(80, 200, 100), outline=(50, 170, 70), width=2)

    # Price tags
    tag_color = (255, 215, 0)
    draw_star(draw, bin_x1 + 30, bin_bot_y - 40, 20, 10, fill=tag_color)
    draw_star(draw, bin_x2 - 30, bin_bot_y - 30, 15, 8, fill=tag_color)

    # Text
    font_large = get_font(55)
    bbox = draw.textbbox((0, 0), "FILL YOUR CART!", font=font_large)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, bin_bot_y + 10), "FILL YOUR CART!", fill=(255, 255, 255, 240), font=font_large)

    font_small = get_font(24)
    bbox2 = draw.textbbox((0, 0), "Crazy deals on everything", font=font_small)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((W - tw2) // 2, bin_bot_y + 65), "Crazy deals on everything", fill=(255, 200, 200, 180), font=font_small)

    img.save(f"{OUTPUT_DIR}/bargain-bin.png")
    print("✓ bargain-bin.png")


# ============================================================
# 6. DEALS HERO - Price tags / sale concept
# ============================================================
def generate_deals_hero():
    W, H = 900, 400
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background - purple to blue gradient
    for y in range(H):
        ratio = y / H
        r = int(60 + ratio * 30)
        g = int(30 + ratio * 40)
        b = int(130 - ratio * 10)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Big price tag shape on left
    tag_color = (255, 200, 50)
    # Tag body (rounded rect with a point at top)
    draw.rounded_rectangle([30, 80, 250, 320], radius=20, fill=tag_color, outline=(220, 170, 30), width=3)

    # Tag hole
    draw.ellipse([110, 70, 170, 130], fill=(60, 30, 130), outline=(220, 170, 30), width=3)
    # Inner hole
    draw.ellipse([120, 80, 160, 120], fill=(60, 30, 130))

    # Price on tag
    font_price = get_font(70)
    bbox = draw.textbbox((0, 0), "$1-$10", font=font_price)
    tw = bbox[2] - bbox[0]
    draw.text((140 - tw // 2, 210), "$1-$10", fill=(60, 40, 20, 240), font=font_price)

    font_small = get_font(20)
    bbox2 = draw.textbbox((0, 0), "Daily Deals", font=font_small)
    tw2 = bbox2[2] - bbox2[0]
    draw.text((140 - tw2 // 2, 270), "Daily Deals", fill=(100, 80, 30, 200), font=font_small)

    # Second smaller tag
    draw.rounded_rectangle([200, 120, 370, 300], radius=15, fill=(230, 80, 80), outline=(190, 60, 60), width=2)
    font_med = get_font(35)
    bbox3 = draw.textbbox((0, 0), "EVERY", font=font_med)
    tw3 = bbox3[2] - bbox3[0]
    draw.text((285 - tw3 // 2, 170), "EVERY", fill=(255, 255, 255, 240), font=font_med)
    bbox4 = draw.textbbox((0, 0), "DAY!", font=font_med)
    tw4 = bbox4[2] - bbox4[0]
    draw.text((285 - tw4 // 2, 215), "DAY!", fill=(255, 255, 255, 240), font=font_med)

    # Main text on right
    font_large = get_font(60)
    bbox5 = draw.textbbox((0, 0), "WEEKLY", font=font_large)
    tw5 = bbox5[2] - bbox5[0]
    draw.text((550, 100), "WEEKLY", fill=(255, 255, 255, 240), font=font_large)

    bbox6 = draw.textbbox((0, 0), "DEALS", font=font_large)
    tw6 = bbox6[2] - bbox6[0]
    draw.text((550, 170), "DEALS", fill=(255, 200, 50, 240), font=font_large)

    font_sub = get_font(25)
    bbox7 = draw.textbbox((0, 0), "BSW OUTLET", font=font_sub)
    tw7 = bbox7[2] - bbox7[0]
    draw.text((550, 250), "BSW OUTLET", fill=(255, 255, 255, 150), font=font_sub)

    # Confetti dots
    import random
    random.seed(42)
    for _ in range(30):
        x = random.randint(400, 880)
        y = random.randint(20, 370)
        colors = [(255, 200, 50), (230, 80, 80), (100, 200, 100), (100, 150, 255)]
        c = random.choice(colors)
        r = random.randint(3, 6)
        draw.ellipse([x - r, y - r, x + r, y + r], fill=c + (150,))

    img.save(f"{OUTPUT_DIR}/deals-hero.png")
    print("✓ deals-hero.png")


# ============================================================
# 7. STOREFRONT - Store building
# ============================================================
def generate_storefront():
    W, H = 800, 400
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background - warm teal gradient
    for y in range(H):
        ratio = y / H
        r = int(15 + ratio * 10)
        g = int(100 + ratio * 50)
        b = int(120 + ratio * 30)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

    # Building body
    building_color = (80, 110, 130)
    building_x1, building_x2 = 140, W - 140
    building_top, building_bot = 70, 340

    draw.rectangle([building_x1, building_top, building_x2, building_bot],
                   fill=building_color, outline=(60, 90, 110), width=3)

    # Roof
    roof_color = (60, 80, 100)
    draw.polygon([
        (building_x1 - 20, building_top),
        (W // 2, building_top - 50),
        (building_x2 + 20, building_top),
    ], fill=roof_color, outline=(40, 60, 80), width=3)

    # Door
    door_w, door_h = 70, 110
    door_x = W // 2 - door_w // 2
    door_y = building_bot - door_h
    draw.rounded_rectangle([door_x, door_y, door_x + door_w, door_y + door_h],
                           radius=8, fill=(100, 140, 160), outline=(60, 100, 120), width=2)

    # Door handle
    draw.ellipse([door_x + door_w - 18, door_y + door_h // 2 - 5,
                  door_x + door_w - 8, door_y + door_h // 2 + 5],
                 fill=(255, 215, 0))

    # Windows
    window_data = [
        (building_x1 + 30, 120, 100, 80),
        (building_x2 - 130, 120, 100, 80),
    ]
    for wx, wy, ww, wh in window_data:
        draw.rounded_rectangle([wx, wy, wx + ww, wy + wh],
                               radius=6, fill=(180, 220, 240, 150), outline=(60, 90, 110), width=2)
        # Window cross
        draw.line([(wx + ww // 2, wy), (wx + ww // 2, wy + wh)], fill=(60, 90, 110), width=2)
        draw.line([(wx, wy + wh // 2), (wx + ww, wy + wh // 2)], fill=(60, 90, 110), width=2)

    # Sign above door
    sign_color = (255, 200, 50)
    draw.rounded_rectangle([door_x - 20, door_y - 45, door_x + door_w + 20, door_y - 15],
                           radius=6, fill=sign_color, outline=(220, 170, 30), width=2)
    font_sign = get_font(18)
    bbox = draw.textbbox((0, 0), "BSW OUTLET", font=font_sign)
    tw = bbox[2] - bbox[0]
    draw.text((W // 2 - tw // 2, door_y - 40), "BSW OUTLET", fill=(50, 40, 20, 240), font=font_sign)

    # Awning
    awning_color = (200, 50, 50)
    draw.rectangle([building_x1 + 10, building_top + 5, building_x2 - 10, building_top + 25],
                   fill=awning_color, outline=(170, 30, 30), width=2)

    # Text at bottom
    font_big = get_font(28)
    bbox2 = draw.textbbox((0, 0), "COME VISIT US IN MEMPHIS", font=font_big)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((W - tw2) // 2, 345), "COME VISIT US IN MEMPHIS",
              fill=(255, 255, 255, 200), font=font_big)

    # Shopping bags next to store
    bag_color = (180, 100, 100)
    draw.rectangle([building_x2 + 10, 190, building_x2 + 55, 270],
                   fill=bag_color, outline=(150, 80, 80), width=2)
    draw.arc([building_x2 + 10, 175, building_x2 + 55, 210], 180, 360, fill=bag_color, width=3)

    # Smaller bag
    draw.rectangle([building_x2 + 65, 210, building_x2 + 100, 270],
                   fill=(200, 160, 60), outline=(170, 130, 40), width=2)
    draw.arc([building_x2 + 65, 195, building_x2 + 100, 225], 180, 360, fill=(200, 160, 60), width=3)

    img.save(f"{OUTPUT_DIR}/storefront.png")
    print("✓ storefront.png")


# ============================================================
# RUN ALL
# ============================================================
if __name__ == "__main__":
    generate_vip_hero()
    generate_furniture_hero()
    generate_furniture_sofa()
    generate_savings_hero()
    generate_bargain_bin()
    generate_deals_hero()
    generate_storefront()
    print("\n✅ All images generated!")

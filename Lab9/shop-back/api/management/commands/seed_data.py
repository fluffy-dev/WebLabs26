from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = 'Seed database with initial product and category data'

    def handle(self, *args, **options):
        if Category.objects.exists():
            self.stdout.write(self.style.WARNING('Data already exists, skipping seed.'))
            return

        categories_data = [
            {'name': 'Smartphones'},
            {'name': 'Laptops'},
            {'name': 'Headphones'},
            {'name': 'Home Appliances'},
        ]

        categories = {}
        for cat_data in categories_data:
            cat = Category.objects.create(**cat_data)
            categories[cat.name] = cat

        products_data = [
            {'name': 'iPhone 15 Pro Max 256GB', 'price': 720125, 'description': 'The latest iPhone with titanium design, A17 Pro chip, and advanced camera system.', 'count': 15, 'is_active': True, 'category': categories['Smartphones']},
            {'name': 'Samsung Galaxy S24 Ultra', 'price': 650000, 'description': 'Flagship Samsung phone with AI features, 200MP camera, and S Pen.', 'count': 20, 'is_active': True, 'category': categories['Smartphones']},
            {'name': 'Google Pixel 10 Pro', 'price': 450000, 'description': 'The all-pro phone engineered by Google. Sharpest Pixel camera yet.', 'count': 8, 'is_active': True, 'category': categories['Smartphones']},
            {'name': 'Xiaomi Redmi Note 14 Pro', 'price': 580000, 'description': 'Legendary photography with Leica optics, Snapdragon 8 Gen 3.', 'count': 25, 'is_active': True, 'category': categories['Smartphones']},
            {'name': 'Huawei nova Y73', 'price': 320000, 'description': 'Unique glyph interface, powerful performance, and clean OS.', 'count': 12, 'is_active': True, 'category': categories['Smartphones']},
            {'name': 'MacBook Air 13 M2', 'price': 430000, 'description': 'Supercharged by M2 chip, 13.6-inch Liquid Retina display, 18 hours battery.', 'count': 10, 'is_active': True, 'category': categories['Laptops']},
            {'name': 'Asus ROG Zephyrus G14', 'price': 850000, 'description': 'Compact gaming laptop with AMD Ryzen 9 and RTX 4060.', 'count': 5, 'is_active': True, 'category': categories['Laptops']},
            {'name': 'Dell XPS 15', 'price': 1200000, 'description': 'Premium laptop with infinity edge display and high performance.', 'count': 3, 'is_active': True, 'category': categories['Laptops']},
            {'name': 'Lenovo Legion 5 Pro', 'price': 650000, 'description': 'Winning performance for Gamers and Creators. QHD display.', 'count': 7, 'is_active': True, 'category': categories['Laptops']},
            {'name': 'HP Spectre x360', 'price': 900000, 'description': 'Versatile 2-in-1 laptop with stunning OLED display.', 'count': 4, 'is_active': True, 'category': categories['Laptops']},
            {'name': 'AirPods Pro 2nd Gen', 'price': 110000, 'description': 'Active Noise Cancellation, Transparency mode, Spatial Audio.', 'count': 30, 'is_active': True, 'category': categories['Headphones']},
            {'name': 'Sony WH-1000XM5', 'price': 165000, 'description': 'Industry-leading noise cancellation and premium sound.', 'count': 18, 'is_active': True, 'category': categories['Headphones']},
            {'name': 'Sennheiser Momentum 4', 'price': 150000, 'description': 'Audiophile performance with 60 hours battery life.', 'count': 9, 'is_active': True, 'category': categories['Headphones']},
            {'name': 'Bose QuietComfort Ultra', 'price': 190000, 'description': 'Immersive sound and world-class noise cancellation.', 'count': 14, 'is_active': True, 'category': categories['Headphones']},
            {'name': 'Marshall Major IV', 'price': 65000, 'description': 'Iconic design with 80+ hours of wireless playtime.', 'count': 22, 'is_active': True, 'category': categories['Headphones']},
            {'name': 'Dyson Airwrap Multi-styler', 'price': 330000, 'description': 'Curl, shape, and smooth with the Coanda effect. Without extreme heat.', 'count': 6, 'is_active': True, 'category': categories['Home Appliances']},
            {'name': 'Xiaomi Robot Vacuum S10+', 'price': 155000, 'description': 'Dual-pad mopping and powerful 4000Pa suction fan.', 'count': 11, 'is_active': True, 'category': categories['Home Appliances']},
            {'name': 'DeLonghi Eletta Explore', 'price': 550000, 'description': 'Bean-to-cup coffee machine with hot and cold milk technology.', 'count': 4, 'is_active': True, 'category': categories['Home Appliances']},
            {'name': 'Philips Airfryer XXL', 'price': 120000, 'description': 'Crispy taste with up to 90% less fat. Rapid Air technology.', 'count': 16, 'is_active': True, 'category': categories['Home Appliances']},
            {'name': 'KitchenAid Artisan Mixer', 'price': 350000, 'description': 'The iconic stand mixer for every kitchen task.', 'count': 8, 'is_active': True, 'category': categories['Home Appliances']},
        ]

        for p_data in products_data:
            Product.objects.create(**p_data)

        self.stdout.write(self.style.SUCCESS(f'Seeded {len(categories_data)} categories and {len(products_data)} products.'))

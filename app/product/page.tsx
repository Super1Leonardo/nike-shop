'use client'
import { useSearchParams } from 'next/navigation';
import { atom, useAtom } from 'jotai';
import { basket, BasketItem } from '../store';

export default function Product() {
    
    const searchParams = useSearchParams();
    let id: string | number | null = searchParams.get('id');
    const db = [
        ['Nike Air Jordan 1', '220$', 'https://i.imgur.com/jj9DIfd.png', `A classic sneaker renowned for its iconic design, originally debuted in the '80s. Known for its high-top silhouette and bold colorways, it remains a staple in basketball culture. The premium materials and craftsmanship ensure long-lasting durability and comfort. Priced at 200$, it’s perfect for sneaker enthusiasts and casual wear alike.`, 'Nike'],
        ['Nike Air Force', '200$', 'https://i.imgur.com/wq76RpV.png', `First introduced as a basketball shoe, the Air Force has since evolved into a streetwear icon. It features a sturdy leather upper and a timeless design that pairs well with any outfit. The cushioned sole ensures comfort for long hours of wear. With a price tag of 200$, it’s a versatile addition to anyone’s sneaker rotation.`],
        ['Nike Air Monarch', '180$', 'https://i.imgur.com/8fl5wna.png', `Known for its unbeatable comfort, the Nike Air Monarch is popular among those looking for a reliable everyday sneaker. Its chunky sole provides excellent support, making it a great choice for long walks or workouts. The leather upper adds a classic look and easy maintenance. At 150$, it's one of the more affordable options in Nike’s lineup.`],
        ['Nike Air Jordan 4', '250$', 'https://i.imgur.com/6HGH2Ic.png', `A legendary model in the Air Jordan series, the Air Jordan 4 is beloved for its unique design and comfortable fit. The combination of leather and mesh gives the shoe both breathability and style. It’s perfect for basketball players and collectors alike due to its historical significance. Priced at 400$, it’s a high-end investment for sneaker lovers.`],
        ['Puma F1 X-Ray', '190$', 'https://i.imgur.com/mAw7M4x.png', `This sneaker is designed with motorsport enthusiasts in mind, combining Puma’s athletic expertise with sleek, racing-inspired style. The chunky sole offers great cushioning, making it ideal for both casual wear and light activity. Its bold color scheme ensures that it stands out in any crowd. For 190$, it’s a great blend of performance and fashion.`],
        ['Puma Rebound Layup', '210$', 'https://i.imgur.com/JE648R2.png', `A basketball-inspired sneaker, the Puma Rebound Layup features a high-top design for ankle support during intense activities. The durable materials and cushioned sole provide comfort for long-term wear. It’s a versatile shoe that can be worn both on and off the court. At 150$, it's an affordable option for those who love the basketball aesthetic.`],
        ['Puma RS-X', '175$', 'https://i.imgur.com/9cZdZul.png', `Known for its futuristic design and chunky silhouette, the Puma RS-X is a favorite among fashion-forward sneakerheads. Its unique mix of colors and materials makes it a bold statement piece. Despite its eye-catching look, the shoe doesn’t compromise on comfort, offering excellent cushioning and fit. Priced at 175$, it’s perfect for those who want to stand out in the sneaker game.`],
        ['Puma RBD Game', '220$', 'https://i.imgur.com/9ChUwqb.png', `This sneaker blends performance and style, making it a great choice for athletes and everyday wearers. The lightweight design ensures speed and agility, while the breathable upper keeps your feet cool. It’s crafted for those who demand both comfort and fashion in their footwear. At 220$, it's a versatile shoe built for both performance and casual settings.`],
        ['Nike Classic Oversize', '115$', 'https://i.imgur.com/a6OObau.png', `The Puma Classic Oversize offers a roomy, relaxed fit designed for maximum comfort and modern street style. Whether it's a cozy sweater or outerwear, its oversized silhouette is perfect for layering during cooler weather. Made from premium, soft materials, it ensures warmth and comfort without compromising on style. Priced at 30$, it’s a versatile addition to any wardrobe, ideal for both casual outings and lounging at home.`, 'Nike'],
        ['Nike Classis Pants', '55$', 'https://i.imgur.com/yzJ8iHV.png', `These athletic pants offer a clean and comfortable look, perfect for both training and leisure. The breathable fabric allows for ease of movement during workouts or daily wear. Their simple design makes them a versatile piece that can be paired with any outfit. At 120$, they provide both style and functionality for those on the go.`],
        ['Nike T-Shirt', '30$', 'https://i.imgur.com/0CnWps3.png', `This simple yet stylish t-shirt is perfect for those who prefer a minimalist look. The soft, breathable fabric ensures comfort whether you’re working out or just hanging out. It features the iconic Nike logo, adding a subtle touch of brand recognition. Priced at 30$, it’s a wardrobe essential that pairs well with anything.`],
        ['Nike Sweater', '85$', 'https://i.imgur.com/sHYUV2T.png', `This cozy sweater combines warmth with style, making it a great option for cooler weather. The high-quality fabric offers both comfort and durability for everyday use. Its minimalist design allows it to be easily paired with various outfits. At 85$, it’s a stylish yet functional choice for those chilly days.`],
        ['Puma Sweater', '80$', 'https://i.imgur.com/f8Wp0rV.png', `Crafted with soft materials, this Puma sweater offers both comfort and a trendy look. It’s designed to keep you warm without sacrificing style, making it ideal for casual outings or layering in colder weather. The sleek logo placement adds a subtle touch of branding. At 80$, it’s an affordable and versatile addition to your wardrobe.`],
        ['Puma T-Shirt', '26$', 'https://i.imgur.com/Iawg7Wb.png', `This casual t-shirt is a go-to for those who value comfort and simplicity. Made with soft, breathable fabric, it’s perfect for workouts or laid-back days. The minimalist design makes it easy to pair with any outfit. At just 26$, it’s an affordable option for anyone looking to stock up on everyday basics.`],
        ['Puma Classic Oversize', '175$', 'https://i.imgur.com/PpUq6Q1.png', `This oversized t-shirt combines comfort with a trendy, relaxed fit. The loose silhouette makes it a great choice for those who prefer a more casual, streetwear-inspired look. It’s made from breathable fabric to ensure all-day comfort. At 30$, it’s perfect for adding a touch of effortless style to your wardrobe.`],
        ['Puma Sport Pants', '220$', 'https://i.imgur.com/DlweKqr.png', `These sport pants are designed for both performance and comfort, making them a great choice for athletes or active individuals. The sleek design allows for ease of movement, while the breathable fabric keeps you comfortable during intense activities. Whether for workouts or casual wear, these pants offer versatility and style. At 220$, they deliver both high performance and fashionable appeal.`]
    ]
    id = Number(id)-1
    const [items, setItem] = useAtom(basket)
    const array: BasketItem = {
        name: db[id][0],
        price: db[id][1],
        image: db[id][2],
        description: db[id][3]
    }
    const click = () => {
        setItem(items => [...items, array]);
        console.log(items)        
    }
    return (
        <div className='w-full flex justify-center '>
            <div className='w-[90dvw] h-[50dvh] '>
                <h1 className='text-8xl w-full text-center mt-[5dvh] font-bold'>{array.name}</h1>
                <div className='w-full mt-[10dvh] h-[50dvh] flex justify-between'>
                    <div className='h-[80dvh] bg-center  bg-no-repeat w-1/2' style={{ backgroundImage: `url(${array.image})` }}></div>
                    <div className='w-1/2'>
                        <h1 className='text-4xl mt-[5dvh] '>{array.description}</h1>
                        <div onClick={click} className='bg-white w-full text-6xl my-[5dvh] hover:cursor-pointer hover-scale-115 py-[2dvh] text-black rounded-def text-center'>Add to busket</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

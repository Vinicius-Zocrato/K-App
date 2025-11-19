import { useState } from "react";
import Section from "./Section";
import "./../../scss/MenuSection.scss";

interface TabButtonProps {
    id: string;
    title: string;
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

function TabButton({ id, title, active, setActive }: TabButtonProps) {
    return (
        <button
            className={"tab-button" + (active == id ? " active" : "")}
            data-tab={id}
            onClick={() => setActive(id)}
        >
            {title}
        </button>
    );
}

interface MenuItemProps {
    title: string;
    desc?: string;
    price: string;
}

function MenuItem({ title, desc, price }: MenuItemProps) {
    return (
        <div className='menu-item'>
            <div className='item-info'>
                <h4>{title}</h4>
                {desc && <p>{desc}</p>}
            </div>
            <div className='item-price'>{price}</div>
        </div>
    );
}

interface MenuCategoryProps {
    id: string;
    active: string;
    menuItems: MenuItemProps[];
}

function MenuCategory({ id, active, menuItems }: MenuCategoryProps) {
    if (active === id)
        return menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
        ));
}

function MenuSection() {
    const [active, setActive] = useState("bieres");

    return (
        <Section id='carte' title='Notre Carte'>
            <div className='menu-tabs'>
                <TabButton
                    id='bieres'
                    title='Bières'
                    active={active}
                    setActive={setActive}
                />
                <TabButton
                    id='cocktails'
                    title='Cocktails'
                    active={active}
                    setActive={setActive}
                />
                <TabButton
                    id='softs'
                    title='Softs'
                    active={active}
                    setActive={setActive}
                />
                <TabButton
                    id='shots'
                    title='Shots'
                    active={active}
                    setActive={setActive}
                />
            </div>
            <div className='menu-content'>
                <MenuCategory
                    id='bieres'
                    active={active}
                    menuItems={[
                        {
                            title: "Bière Pression",
                            desc: "25cl / 50cl",
                            price: "2€ / 3.5€",
                        },
                        {
                            title: "Bière Bouteille",
                            desc: "33cl",
                            price: "3€",
                        },
                        {
                            title: "Bière Spéciale",
                            desc: "33cl",
                            price: "4€",
                        },
                    ]}
                />
                <MenuCategory
                    id='cocktails'
                    active={active}
                    menuItems={[
                        {
                            title: "Mojito",
                            desc: "Rhum, menthe, citron vert",
                            price: "6€",
                        },
                        {
                            title: "Vodka Red Bull",
                            desc: "Vodka Red Bull",
                            price: "7€",
                        },
                        {
                            title: "Cuba Libre",
                            desc: "Rhum, coca, citron vert",
                            price: "6€",
                        },
                        {
                            title: "Gin Tonic",
                            desc: "Gin, tonic, citron",
                            price: "6€",
                        },
                    ]}
                />
                <MenuCategory
                    id='softs'
                    active={active}
                    menuItems={[
                        {
                            title: "Coca-Cola / Sprite",
                            desc: "33cl",
                            price: "2€",
                        },
                        {
                            title: "Jus de Fruits",
                            desc: "Orange, pomme, ananas",
                            price: "2.5€",
                        },
                        {
                            title: "Eau Minérale",
                            desc: "50cl",
                            price: "1.5€",
                        },
                    ]}
                />
                <MenuCategory
                    id='shots'
                    active={active}
                    menuItems={[
                        {
                            title: "Vodka",
                            desc: "4cl",
                            price: "2.5€",
                        },
                        {
                            title: "Tequila",
                            desc: "4cl",
                            price: "2.5€",
                        },
                        {
                            title: "Jägermeister",
                            desc: "4cl",
                            price: "3€",
                        },
                    ]}
                />
            </div>
        </Section>
    );
}

export default MenuSection;

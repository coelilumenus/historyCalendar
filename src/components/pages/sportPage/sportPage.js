import React from 'react';
import Title from '../../title/title';
import ContentCard from '../../contentCard/contentCard';
import Footer from '../../footer/footer';
import './sportPage.css';

const SportPage = () => {
    return (
        <>
            <Title title={'Нырните в историю спорта'} />
            <section className="container">
                <ContentCard 
                    order={'odd'} 
                    date={'19 июля'} 
                    year={'1980'} 
                    term={'Летние Олимпийские игры'} 
                    definition={'Летние Олимпийские игры 1980 года проходили в Москве, столице СССР, с 19 июля по 3 августа 1980 года. Это были первые в истории Олимпийские игры на территории Восточной Европы, а также первые Олимпийские игры, проведённые в социалистической стране.'} 
                    src={'/images/olympicgames.jpg'} 
                    alt={'Олимпийские игры 1980 г.'}
                />
                <ContentCard 
                    order={'even'} 
                    date={'7 февраля'} 
                    year={'2014'} 
                    term={'Зимние Олимпийские игры'} 
                    definition={'На территории России Олимпийские игры прошли во второй раз (до этого в Москве в 1980 году прошли летние Олимпийские игры), и впервые — зимние Игры. По окончании Олимпийских игр на тех же объектах были проведены зимние Паралимпийские игры.'} 
                    src={'/images/olympicgames2014.jpeg'} 
                    alt={'Олимпийские игры 2014 г.'}
                />
            </section>
            <Footer />
        </>
    )
}

export {SportPage};
import React from 'react';
import Title from '../../title/title';
import ContentCard from '../../contentCard/contentCard';
import Footer from '../../footer/footer';

const ArtPage = () => {
    return (
        <>
            <Title title={'Окунитесь в изящество истории искусства'} />
            <section className="container">
                <ContentCard 
                    order={'odd'} 
                    date={'28 марта'} 
                    year={'1776'} 
                    term={'Открытие Большого театра'} 
                    definition={'Появление на свет одного из крупнейших в России и одного из самых значительных в мире театров оперы и балета.'} 
                    src={'/images/bigtheatre.jpg'} 
                    alt={'Большой театр'}
                />
                <ContentCard 
                    order={'even'} 
                    date={'7 декабря'} 
                    year={'1764'} 
                    term={'Основание Эрмитажа'} 
                    definition={'Музей изобразительного и декоративно-прикладного искусства, расположенный в городе Санкт-Петербурге Российской Федерации. Основан 7 декабря 1764 года. Является одним из крупнейших художественных музеев в мире.'} 
                    src={'/images/ermitazh.jpg'} 
                    alt={'Эрмитаж'}
                />
            </section>
            <Footer />
        </>
    )
}

export {ArtPage};
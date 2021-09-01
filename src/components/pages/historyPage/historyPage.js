import React from 'react';
import Title from '../../title/title';
import ContentCard from '../../contentCard/contentCard';
import Footer from '../../footer/footer';

const HistoryPage = () => {
    return (
        <>
            <Title title={'Начните путешествие по страницам истории'} />
            <section className="container">
                <ContentCard 
                    order={'odd'} 
                    date={'19 февраля'} 
                    year={'1861'} 
                    term={'Отмена крепостного права в России'} 
                    definition={'Начатая в 1861 году реформа, упразднившая крепостное право в России. Явилась первой по времени и наиболее значимой из «великих реформ» Александра II; провозглашена Манифестом об отмене крепостного права от 3 марта 1861 года.'} 
                    src={'/images/manifest.jpg'} 
                    alt={'Manifest 1861'}
                />
                <ContentCard 
                    order={'even'} 
                    date={'9 мая'} 
                    year={'1945'} 
                    term={'Победа над Германией'} 
                    definition={'9 мая 1945 года в 0.43 по московскому времени (8 мая в 22.43 по центральноевропейскому времени) в предместье Берлина Карлсхорсте был подписан окончательный Акт о безоговорочной капитуляции фашистской Германии и ее вооруженных сил.'} 
                    src={'/images/9may.jpg'} 
                    alt={'9 may 1945'}
                />
                <ContentCard 
                    order={'odd'} 
                    date={'26 декабря'} 
                    year={'1991'} 
                    term={'Распад СССР'} 
                    definition={'26 декабря 1991 года прекратил свое существование СССР, соответствующее решение было официально оформлено постановлением союзного парламента.'} 
                    src={'/images/eltsin.jpg'} 
                    alt={'Eltsin 1991'}
                />
            </section>
            <Footer />
        </>
    )
}

export {HistoryPage};
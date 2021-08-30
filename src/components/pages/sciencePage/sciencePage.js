import React from 'react';
import Title from '../../title/title';
import ContentCard from '../../contentCard/contentCard';
import Footer from '../../footer/footer';
import './sciencePage.css';

const SciencePage = () => {
    return (
        <>
            <Title title={'Восхититесь научными достижениями'} />
            <section className="container">
                <ContentCard 
                    order={'odd'} 
                    date={'12 апреля'} 
                    year={'1961'} 
                    term={'"Поехали!"'} 
                    definition={'12 апреля 1961 - ВПЕРВЫЕ В КОСМОСЕ! Полёт по околоземной орбите космического корабля "Восток" с нашим соотечественником Ю.А. Гагариным на борту ознаменовал начало эпохи пилотируемых космических полетов.'} 
                    src={'/images/gagarin.jpg'} 
                    alt={'Гагарин'}
                />
                <ContentCard 
                    order={'even'} 
                    date={'17 февраля'} 
                    year={'1869'} 
                    term={'Появление Таблицы Менделеева'} 
                    definition={'Таблица Менделеева является графическим выражением периодического закона, открытого русским учёным Д. И. Менделеевым в 1869 году и установившего зависимость свойств элементов от их атомного веса.'} 
                    src={'/images/mendeleev.jpg'} 
                    alt={'Менделеев'}
                />
                <ContentCard 
                    order={'odd'} 
                    date={'Декабрь'} 
                    year={'1904'} 
                    term={'Первая Нобелевская премия в России'} 
                    definition={'В 1904 И. Павлов был награжден Нобелевской премией по физиологии и медицине «за работу по физиологии пищеварения, благодаря которой было сформировано более ясное понимание жизненно важных аспектов этого вопроса».'} 
                    src={'/images/pavlov.jpg'} 
                    alt={'Павлов'}
                />
            </section>
            <Footer />
        </>
    )
}

export {SciencePage};
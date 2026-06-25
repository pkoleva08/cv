import './MainContent.css'
 
function MainContent() {
    return (
        <main className="main-content">
            <section className="li">
                <p className="linfo">Полина Колева</p>
                <p className="linfo">гр. Стара Загора, ул. "Иван Вазов №22"</p>
                <p className="linfo">+359 89 587 4499</p>
                <p className="linfo">polina.koleva@gmail.com</p>
                <p className="linfo">България</p>
                <p className="linfo">06.09.2008 г.</p>

                <section className="trudov-staj">    
                <p className="ts">01.07.2025 г. - 15.07.2025 г.</p>
                <p className="ts">eLando AD</p>
                <p className="ts">Стажант програмист</p>
                <p className="ts">Разработване на малки проекти и задачи с JavaScript, HTML и CSS – калкулатор, Snake game, Tic Tac Toe и други.</p>
                </section>
                <section className="obrazovanie1">
                    <p>2022 г. - до момента</p>
                    <p>ПГКНМА "Проф. Минко Балкански", гр. Стара Загора</p>
                    <p>Приложно програмиране</p>
                </section>
                <section className="obrazovanie2">
                    <p>2018 г. - 2022 г.</p>
                    <p>ОУ "Кирил Христов", гр. Стара Загора</p>
                    <p>Основно образование</p>
                </section>
                <section className="obrazovanie3">
                    <p>2015 г. - 2018 г.</p>
                    <p>ОУ "Христо Ботев", гр. Гълъбово</p>
                    <p>Начално образование</p>
                </section>
                    <section className="ezici1">
                    <p>Български - Роден език</p>
                    <p>Английски - B2</p>
                    <p>Испански - A1</p>
                    </section>
            </section>
        </main>
    );
}

export default MainContent;
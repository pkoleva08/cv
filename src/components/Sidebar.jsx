import ez from '../assets/ez.png'
import './Sibedar.css'

function Sidebar() {
    return (
        <aside className="cv-sidebar">
            <h1 className="sidebar-title">
                <span className="sidebar-title-line">ЕВРОПЕЙСКИ</span>
                <span className="sidebar-title-line">ФОРМАТ НА</span>
                <span className="sidebar-title-line">АВТОБИОГРАФИЯ</span>
            </h1>
            <img className="ez" src={ez} alt="EZ Logo" />

            <section className="sidebar-info">
                <p className="linfo-title">ЛИЧНА ИНФОРМАЦИЯ</p>
                <p className="linfo-line">Име:</p>
                <p className="linfo-line">Адрес:</p>
                <p className="linfo-line">Телефон:</p>
                <p className="linfo-line">E-mail:</p>
                <p className="linfo-line">Националност:</p>
                <p className="linfo-line">Дата на раждане:</p>
                <p className="trudov-staj-title">ТРУДОВ СТАЖ</p>
                <p className="trudov-staj-line">Дати (от-до)</p>
                <p className="trudov-staj-line">Фирма</p>
                <p className="trudov-staj-line">Длъжност</p>
                <p className="trudov-staj-line">Описание на длъжността</p>
                <p className="obrazovanie-title">ОБРАЗОВАНИЕ И ОБУЧЕНИЕ</p>
                <section className="obrazovanie-uno">
                    <p>Дати (от-до)</p>
                    <p>Име на училище</p>
                    <p>Специалност</p>
                </section>
                 <section className="obrazovanie-dos">

                <p>Дати (от-до)</p>
                <p>Име на училище</p>
                <p>Специалност</p>
                </section>
                <section className="obrazovanie-tres">
                <p>Дати (от-до)</p>
                <p>Име на училище</p>
                <p>Специалност</p>
                </section>
                <p className='ezici'>ЕЗИЦИ</p>
            </section>
        </aside>
    )

}
export default Sidebar
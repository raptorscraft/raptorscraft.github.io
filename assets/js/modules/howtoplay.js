export function toHowtoplay(forLogo, forInfo) {
    forLogo.innerHTML = "How To Play";

    forInfo.innerHTML = `
        <div class = "rules_block">
            <h3><span style = "color: red;">Leaflet</span></h3>
            <ul>
                <p>
                    Данный раздел содержит информацию, которая касается инструкций, позволяющих вникнуть в игровой процесс.
                </p>
            <ul>
        </div>

        <div class = "rules_block">
            <h3>Registration</h3>
            <ul>
                <p>
                Регистрация на сервер происходит через Discord. Для этого Вам нужно зайти на наш сервер (ссылка есть в разделе "About"),
                 после чего прописать в любом чате команду <span class = "command">/registration.</span> 
                 В вылезшем модальном окне впишите ник, который будет использоваться для игры на сервере. 
                 Если Вы на него приглашены - администрация одобрит Вашу заявку и Вы получите роль игрока, 
                 что будет символизировать попадание Вашего ника в white-list сервера, а следовательно и возможность начать играть.
                </p>
            <ul>
        </div>

        <div class = "rules_block">
            <h3>Clan System</h3>
            <ul>
                <p>
                На нашем проекте есть система кланов.
                В майнкрафте этот процесс не будет контролироваться, но вот на сервере Discord
                для более удобной работы системы мы сделали бота, позволяющего с этим работать.
                <br><br>
                Для создания клана используйте команду <span class = "command">/create_clan</span>, отправьте её в чат. В модальное
                окно введите желаемое названия для клана.
                <br><br>
                Вот список команд, позволяющих взаимодействовать с кланами:<br>
                <span class = "command">;all-clans-info</span> - посмотреть список всех кланов, их владельцев и айдишники.
                <br>
                <span class = "command">;clan [id]</span> - узнать информацию о клане.
                <br>
                <span class = "command">;invite-user [ID / mention]</span> - позволяет владельцу пригласить пользователя в клан.
                <br>
                <span class = "command">;kick-user [ID / mention]</span> - позволяет владельцу изгнать пользователя из клана.
                <br>
                <span class = "command">;leave-clan</span> - позволяет пользователю выйти из клана.
                <br>
                <span class = "command">/delete_clan [ID]</span> - позволяет пользователю удалить свой клан по его айди.
                <br><br>
                У каждого клана есть своя отдельная роль, голосовой и текстовый каналы. Они видны и могут использоваться только участниками клана.
                Участних может находиться только в одном клане.
                </p>
            <ul>
        </div>
    `;
}
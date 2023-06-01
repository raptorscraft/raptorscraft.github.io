export function toHowtoplay(forLogo, forInfo) {
    forLogo.innerHTML = "How To Play";

    forInfo.innerHTML = `
        <div class = "rules_block">
            <h3><span style = "color: red;">Leaflet</span></h3>
            <p>
                Данный раздел содержит информацию, которая касается инструкций, позволяющих вникнуть в игровой процесс.
            </p>
        </div>

        <div class = "rules_block">
            <h3>Registration</h3>
            <div>
                Чтобы зарегистрироваться на нашем сервере, используйте Discord. 
                Для этого просто перейдите по ссылке, которая находится в разделе "About", 
                и зайдите на сервер. После этого в любом чате введите команду <span class = "command">/registration</span>. 
                Появится модальное окно, где вам нужно будет указать ник, который будет использоваться 
                в игре на сервере. Если вас пригласили на сервер, администрация проверит вашу заявку и 
                предоставит вам роль игрока. Роль игрока означает, что ваш ник будет добавлен в белый 
                список сервера, что позволит вам начать играть.
            </div>
        </div>

        <div class = "rules_block">
            <h3>Clan System</h3>
            <div>
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
            </div>
        </div>

        <div class = "rules_block">
            <h3>How To Play</h3>
            <div>
                Инструкция для начала игры:

                У вас должна быть установлена версия Minecraft: Forge 1.16.5. Наличие лицензии не обязательно. Вы можете использовать любой лаунчер, но если не знаете, какой выбрать, рекомендуем использовать TLauncher Legacy, так как в этой инструкции мы будем использовать именно его.

                Чтобы установить моды, запустите лаунчер и выберите нужную версию Minecraft (её, само собой, нужно установить). Затем откройте папку, где установлен Minecraft. В TLauncher Legacy это можно сделать, нажав на кнопку, которая автоматически откроет нужную папку. Ниже приведен скриншот для наглядности.

                <br><br>
                    <div class = "image_block">
                        <img class = "howtoplay_image" src = "https://cdn.discordapp.com/attachments/1111776769066926131/1113791731582914560/image.png">
                        <span style = "font-size: 1.2vh;">Наведитесь, чтобы увеличить</span>
                    </div>
                <br><br>

                После открытия корневой папки вы увидите ещё одну папку с названием "mods". В неё нужно переместить все файлы, которые вы скачали с Google Диска по ссылке, указанной ниже. В этой папке содержатся моды и необходимые для них библиотеки.
                <br><br>
                Моды: <a style = "color: blue; text-decoration: underline;"href = "https://drive.google.com/file/d/1X99FKsYjxb7XdeC20rlYGeze9Ey-mD3Q/view?usp=sharing" target = "_blank">*click*</a>
                <br><br>
                Всё необходимое для подключения к серверу будет публиковаться на нашем Discord сервере.
            </div>
        </div>
    `;

    document.querySelector(".howtoplay_image").addEventListener("mouseover", () => {
        document.querySelector(".howtoplay_image").style.cssText = "scale: 1.7;";
    });

    document.querySelector(".howtoplay_image").addEventListener("mouseleave", () => {
        document.querySelector(".howtoplay_image").style.cssText = "scale: 1;";
    });

}

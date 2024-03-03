# Поиск пользователей github
## Разработчик

Куртымов Максим

## Описание проекта
Реализован интерфейс поиска пользователей GitHub. Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} (документация: https://developer.github.com/v3/search/#search-users).



## Функционал

- поиск: по логину;
- сортировка: по количеству репозиториев (возрастанию/убыванию);
- пагинация;
- при клике на элемент открываются подробности.

## Запуск проекта
1. Скачайте архив проекта или склонируйте репозиторий 
```bash
git clone https://github.com/Zoldok/search-user.git
```

2. Установить зависимости проекта 
```bash
npm install
```
3. Запустить проект командой 
```bash
npm run start
```
4. Проект будет запущен по адресу: http://localhost:3000

## Используемые технологии
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40"/>&nbsp; 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="40" height="40"/>&nbsp;     
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="js" width="40" height="40"/>&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="html" width="40" height="40"/>&nbsp;
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40"/>&nbsp;
</div>


# Для запуска теста
```bash
npm run test
```
# Деплой проекта

https://classy-squirrel-c88e57.netlify.app/

![Безымянный](https://github.com/Zoldok/search-user/assets/129782617/66f651aa-95f0-4bdf-b0fe-626f9df93fde)

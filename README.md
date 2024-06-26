# [Online-ZOO](https://wee-owl.github.io/online-zoo/main.html)
Online-ZOO - это учебный проект [The Rolling Scopes School](https://rs.school/), разработанный по [макету в Figma](https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online).  
Это платформа, которая с помощью веб-камер собирает информацию о животных из разных зоопарков.  
Предполагается, что пользователь может открыть страницу ресурса зоопарка, понаблюдать за одним из животных, почитать отзывы или сделать пожертвование, которое пойдет на покупку еды.  
В рамках задачи была сделана адаптивная верстка и интерактивность главной страницы и страницы пожертвований (`main` и `donate`).  

<img src="https://github.com/wee-owl/online-zoo/assets/95621680/dee625e7-4fb2-467e-8ca0-c86e04cd0870" width="500" height="" alt="SongBird Quiz cover">

## Технологии
- JavaScript
- HTML
- CSS
- Pixel Perfect верстка
- модульная верстка

## Реализованная функциональность
- бесконечная карусель с животными на странице `main`
- горизонтальная карусель отзывов на странице `main`, при ширине экрана меньше 640px - вертикальная карусель с возможностью открытия модального окна с отзывом
- валидация поля для ввода адреса электронной почты в `footer`
- на странице `donate` панель `amount` в блоке `pick and feed a friend` отражает сумму, ввденную в поле и совпадающую с указанной на шкале
- при нажатии на сумму, указанную на шкале `amount`, сумма отразится в поле ввода

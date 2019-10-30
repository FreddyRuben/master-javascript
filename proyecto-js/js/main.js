$(document).ready(() => {

  // Slider
  if (window.location.href.indexOf('index') > -1) {
    $('.galeria').bxSlider({
        pager: true,
        mode: 'fade',
        captins: true,
        slideWidth: 1200,
      });
  }

      // Posts
      if (window.location.href.indexOf('index') > -1) {

        var posts = [
          {
            title: 'Prueba de titulo 1',
            date: "Publicado el dia "+moment().date()+" de "+moment().format('MMMM')+" de "+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            title: 'Prueba de titulo 2',
            date: "Publicado el dia "+moment().date()+" de "+moment().format('MMMM')+" de "+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            title: 'Prueba de titulo 3',
            date: "Publicado el dia "+moment().date()+" de "+moment().format('MMMM')+" de "+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            title: 'Prueba de titulo 4',
            date: "Publicado el dia "+moment().date()+" de "+moment().format('MMMM')+" de "+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            title: 'Prueba de titulo 5',
            date: "Publicado el dia "+moment().date()+" de "+moment().format('MMMM')+" de "+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            title: 'Prueba de titulo 6',
            date: "Publicado el dia "+moment().date()+" de "+moment().format('MMMM')+" de "+moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
        ];
  
        posts.forEach((item, index) => {
          var post = `<article class="post">
               <h2>${item.title}</h2>
               <span class="date">${item.date}</span>
               <p>
                   ${item.content}
               </p>
               <a href="#" class="button-more">Leer mas</a>
           </article>`
  
          $('#posts').append(post);
        });
        // posts.forEach((item) => {
        //   let posts = document.querySelector('#posts');
        //   let article = document.createElement('article');
        //   article.setAttribute('class', 'post');
          
        //   let title = document.createElement('h2');
        //   let date = document.createElement('span');
        //   let p = document.createElement('p');
        //   let a = document.createElement('a');
          
        //   title.appendChild(document.createTextNode(item.title));
        //   date.appendChild(document.createTextNode(item.date));
        //   p.appendChild(document.createTextNode(item.content));
        //   a.appendChild(document.createTextNode('Leer mas'));
          
        //   posts.appendChild(article);
        //   a.setAttribute('class', 'button-more');
        //   date.setAttribute('class', 'date')
  
        //   article.appendChild(title);
        //   article.appendChild(date);
        //   article.appendChild(p);
        //   article.appendChild(a);
  
        // });
      }


      // Selector de temas
      let theme = $('#theme');

      $('#to-green').click(() => {
        theme.attr('href', 'css/green.css');
      });

      $('#to-red').click(() => {
        theme.attr('href', 'css/red.css');
      });
      
      // Lo mismo pero pero con JavaScript nativo
      document.querySelector('#to-blue').addEventListener('click', () => {
        let theme = document.querySelector('#theme');
        theme.setAttribute('href', 'css/blue.css');
      });

      // Scroll arriba de la web
      $('.subir').click((e) => {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      });

      // Login falso
      $('#login form').submit(() => {
        let formName = $('#form-name').val();
        localStorage.setItem('form-name', formName);
      });
      let formName = localStorage.getItem('form-name');

      if (formName != null && formName != 'undefined') {
        
        let aboutParrafo = $('#about p');
        
        aboutParrafo.html('<br><strong>Bienvenido '+formName+'</strong> ');
        aboutParrafo.append('<a href="#" id="logout">Cerrar sesion</a>')

        $('#login').hide();
        $('#logout').click(() => {
          localStorage.clear()
          location.reload();
        });
      }

      // Acordeon
      if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
      }

      // Reloj
      if (window.location.href.indexOf('reloj') > -1) {

        setInterval(() => {
          let reloj = moment().format('hh:mm:ss');
        $('#reloj').html(reloj);
        }, 1000);
        
        
      }

      // Validation
      if (window.location.href.indexOf('contact') > -1) {
        $('form input[name="date"]').datepicker({
          dateFormat: 'dd-mm-yy'
        })
        $.validate({
          lang: 'es',
          errorMessagePosition: 'top',
          scrollToTopOnError: true
        });
      }
      
});

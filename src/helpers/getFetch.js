const muestra = [
    {id: '1', name: 'Botella',categoria:'Romper', price:250 , foto:'https://us.123rf.com/450wm/derzai/derzai1310/derzai131000027/22968942-frasco-de-vidrio-de-vino-transparente-ilustraci%C3%B3n-del-vector-recogida-de-botellas-de-vidrio-art%C3%ADculo.jpg?ver=6', Stock: 10},
    {id: '2', name: 'Televisor',categoria:'Romper', price:1000 , foto:'https://us.123rf.com/450wm/mas0380/mas03801801/mas0380180100053/94117369-vecteur-retro-tv-portable-avec-%C3%A9cran-blanc-isol%C3%A9-sur-fond-blanc.jpg', Stock: 15},
    {id: '3', name: 'Puerta',categoria:'Romper', price:5000 , foto:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAC5ubmIiIi/v7/d3d3k5OTCwsJERETn5+fKysrV1dVeX2HHx8dPT086OTkZGRl5eXlnZ2cdHR1YWFg9PT+SkpKkpKT29vZHR0cSEhL09PSDg4NXV1cuLi43Nze6ub9wcHCwsLCbm5smJiYUFBLFxMoLCwuwr7Wgn6WgoKB2dnZ/foOYl51ItK4kAAADiElEQVR4nO3dXXOiMBiG4QQDAoqgKOJntXWr7Xb//99bEquzswc7hMV8vD73Qc0JmbmcsUAEZAwhhBBCCCGEEEIIIYQQQk9UHSUPqbYNu8cflW3YPT4TQf+JmUPCwUOmHUBorucQ1nEcr+L+qp0ThjzPy3jVUzkPHRRmGR/1tSd8dVIoxLnHXaGbQv467KesclWY9DWjcFUY9TVjAKHhINQPQtNBqB+EpoNQPwhN94zCaj7u0Pzttr37wvVpkWu3OL3ctndfWM67zLNa3EZeCOvdRKsdY7FfwpDnOmtrebOxd0KhM4fwURjozBFAaDUI2wSh3SBsE4R2g7BNENoNwjZBaDcI20Rf6OUZcJVqVPknjHSvL0l8E7JwpFXo2VrbKhtmmg3T3Cdhtwuh8tv27gs3Yac2t+3dF/5vEJoOQv0gNB2E+kFoOgj1IyscZeF1QFSY7JuD750aEhWui0pMz4pIUyj4ac3LvZqEpnBZxC/D9Y5njK5wsWB8wlMGofkgbNdy/UJcmPFTIzyp28NoCjershH+OMoxTSF73zfC8UgOiQqZ/Bx+qRFVYdwIKzWC0HQQtg1Ce0HYNgjt1ZdQHtPM1IioUB2XntWzbmgK0+9zC/lFME3hssjV+SHWaWzUmzCmLtyXRbGiLOTBdDt9Jfw5DNTFjANpIypMTrwSUz6RY5pCdllxzsfvckhUuDlcPi4H9UhPokLGouj7WVpkhfeoCoPx4ji6jmgKJ3zd/K/ZyiFN4ZZ/Nn9/qr0iSWHN1TcWbL9nRIUhH6rXN+kiKrzegbIlK6z54voiL2enKfzi83CT7vkHIypkhy95Q8L6lzwwpSlMLpfPanm4yDFNoSReqB95J9H3PSVkhfcgNB2E+kFour+Fm+2gS9v7zXnOCzPe5fnzZ7UWfM11YcrDDrOEaj3/mvvCEUuPU52OKRt5JhwXZdG+shh7J5yVWlOUMwitBmGLILQchC2C0HIQtghCy0HYIggtB2GLILTcswoTjYd8JR4Kx5prif6t0ySB0CnYeCYUYRjpFYbCI2HWYcVb5s+aNxOdfl/1j980cV7430FoOgj1g9B0EOoHoekg1A9C00GoH4Smg1A/CE0HoX4Qmg5C/SA0nRRGfDjkSV8zqjfLJeFMBEteVXwZ9JMYNFOJmUPCR2Ubdq9OmiLtL2P+mZyytg1DCCGEEEIIIYQQQgghhJDJfgNWG3OkcSeffgAAAABJRU5ErkJggg==', Stock: 100},
    {id: '4', name: 'Compu',categoria:'Romper', price:1500 , foto:'https://us.123rf.com/450wm/creator76/creator761602/creator76160200005/52338417-icono-plana-del-ordenador-en-negro-sobre-blanco-ilustraci%C3%B3n-vectorial.jpg?ver=6', Stock: 100},
    {id: '5', name: 'Platos',categoria:'Romper', price:100 , foto:'https://us.123rf.com/450wm/yupiramos/yupiramos1802/yupiramos180234504/96425894-plato-con-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-cubiertos.jpg', Stock: 10},
    {id: '6', name: 'Vasos',categoria:'Romper', price:50, foto:'https://us.123rf.com/450wm/stockgiu/stockgiu1706/stockgiu170600918/79649937-l%C3%ADnea-de-vaso-de-agua-a-la-ilustraci%C3%B3n-de-vector-de-frescura-y-healthylife.jpg', Stock: 150},
]


export const getFetch = new Promise ((resolve,reject)=>{
  let url ='ggg'
  if(url === 'ggg'){

setTimeout(() => {
  resolve (muestra)
    
},3000);
  }else{
      reject('Error')
  }
})
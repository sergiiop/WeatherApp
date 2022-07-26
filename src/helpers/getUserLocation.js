export const getUserLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude])
      },
      (err) => {
        window.alert('No se pudo obtener la geolocalizacion')
        console.error(err)
        reject(err)
      }
    )
  })
}

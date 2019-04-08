export default function (context) {
  const { redirect, $axios } = context

  const url = (process.browser) ? `//${window.location.host}/api/action` : 'action'

  $axios({
    method: 'POST',
    url: url,
    data: {
      type: 'login'
    }
  }).then(({ data }) => console.log(data))

  redirect(301, '/addData')
}

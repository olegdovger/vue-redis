export default function (context) {
  const { $axios } = context

  const url = (process.browser) ? `//${window.location.host}/api/action` : 'action'

  $axios({
    method: 'POST',
    url: url,
    data: {
      type: 'login'
    }
  }).then(({ data }) => console.log(data))
}

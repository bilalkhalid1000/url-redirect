/**
 * api index route
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.index = async (req, res) => {
  try {
    return res.status(200).json({ message: 'Node Boilerplate' })
  } catch (error) {
    return res.status(400).send({ message: error?.message ?? 'Something went wrong' })
  }
}

/**
 * api redirect to a url
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.redirect = async (req, res) => {
  try {
    // const domain = req.hostname
    // console.log(domain)

    // switch (domain) {
    //   case 'bilalkhalid.dev':
    //     return res.redirect('https://www.linkedin.com/in/bilal-khalid-3b8445148/')

    //   default:
    //     return res.status(404).json({ message: 'Not found' })
    // }

    return res.redirect('https://www.linkedin.com/in/bilal-khalid-3b8445148/')
  } catch (error) {
    return res.status(400).send({ message: error?.message ?? 'Something went wrong' })
  }
}

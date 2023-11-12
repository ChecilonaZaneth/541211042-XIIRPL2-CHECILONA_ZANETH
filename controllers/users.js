const User = require('../models/User')

module.exports = {
  // get all users
    index: async (req, res) => { //index untuk menampilkan data
       try {
        const users = await User.find()
        if(users.length > 0){ //user.length untuk panjang data atau menghitung panjang data
          res.status(200).json({ //menampilkan dalam bentuk json
            status: true,
            data: users,
            method: req.method,
            url: req.url
          })
        }else{
          res.json({
            status: false,
            message: "Data masih kosong"
          })
        }
       } catch (error) {
          res.status(400).json({sucess: false})
       }
        
      },
      // get a user
      show: async (req, res) => {
        try {
          const user = await User.findById(req.params.id)
          res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            mesage: "Data berhasil didapat"
          })
          
        } catch (error) {
          res.status(400).json({succes: false})
        }
      },  
      store: async (req, res) => { //untuk post data / menyimpan
        try {
          const user = await User.create(req.body)
          res.status(200).json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            mesage: "Data berhasil ditambahkan"
          })
        } catch (error) {
          res.status(400).json({succes: false})
        }
      },
      update: async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          })
          res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            mesage: "Data berhasil diubah"
          })
          
        } catch (error) {
          res.status(400).json({succes: false})
        }
        
      },
      delete: async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.id)
          res.json({ //sebagai respon
            status: true,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapus"
          })
        } catch (error) {
          res.status(400).json({succes: false})
        }
      }
}
//mvc module, view, controller | model berhubungan dengan databe untuk mereprensentasikan database
//controller untuk menghubungkan view dan antarmodel
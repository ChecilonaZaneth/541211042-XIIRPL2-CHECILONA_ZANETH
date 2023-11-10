const User = require('../models/User')

module.exports = {
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
      update: (req, res) => {
        const id = req.params.id //mengirimkan parameter
        users.filter(user => { 
          if(user.id == id){ //wadah untuk menampung value dari params.id
            user.nama = req.body.nama //req.body.nama digunakan sebagai menginput data
            user.email = req.body.email
            return user
          }
        })
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          mesage: "Data berhasil diubah"
        })
      },
      delete: (req, res) => {
        const id = req.params.id 
        users = users.filter(user => user.id != id) //bernilai tidak sama dengan bernilai true
    
        res.json({ //sebagai respon
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "Data berhasil dihapus"
        })
      }
}
//mvc module, view, controller | model berhubungan dengan databe untuk mereprensentasikan database
//controller untuk menghubungkan view dan antarmodel
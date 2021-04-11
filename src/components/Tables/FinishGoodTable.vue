<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.Id }}</md-table-cell>
        <md-table-cell md-label="Nombre">{{ item.NumeroParte }}</md-table-cell>
        <md-table-cell md-label="Descripcion">{{
          item.Descripcion
        }}</md-table-cell>
        <md-table-cell md-label="Activo">{{ item.Activo }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "finishgood-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          Id: 1,
          NumeroParte: "DT04-2P",
          Descripcion: "DT SERIES 2 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d3c446c7e5c7e72f246e5290f1b2c505bc95027652b9b122011a1d504991ccae93f13c1ae4d9ccbcc43d1f174b9c873d1a1271c9acbe008f032609650f8c865e.jpg",
          Activo: 1,
        },
        {
          Id: 2,
          NumeroParte: "DT04-2P-C015",
          Descripcion: "DT SERIES 2 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/07e57b7cbae98ad2fae4d9e7c1195cc69f2cb1e28e38de1e52247cf6675b94fa58a192d291d7a8c7fc826d890ec1366725f30fcedee7fa601b97d3cac43c8b50.jpg",
          Activo: 1,
        },
        {
          Id: 3,
          NumeroParte: "DT04-2P-CE02",
          Descripcion: "DT SERIES 2 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/cd1041eebaa40b1a19304a72b3a64124044f0c40e094d1c19650bc098562dad74617f6ab8588e9986353ee0d2fbe1d577f21e904ed46e47d5402991e096f886c.jpg",
          Activo: 1,
        },
        {
          Id: 4,
          NumeroParte: "DT04-2P-E004",
          Descripcion: "DT SERIES 2 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e400215bdd075ee462fabcb7105575a2f7edcfd2dfdffb64cac5fea23068f4067a30a3620d23db54862bce31d9e1654e8e6f1d0720030abb4563e5e2b4e24068.jpg",
          Activo: 1,
        },
        {
          Id: 5,
          NumeroParte: "DT04-2P-P004",
          Descripcion: "DT SERIES 2 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/181649eb9cbca2448a5e7bbbbf1d0de696bf91bcacd91571eac1e68a2434e2c9cdd1984461055a95fe3e04790bec7190dc39159470beb4b2e696c082823ca2fb.jpg",
          Activo: 1,
        },
        {
          Id: 6,
          NumeroParte: "DT04-3P",
          Descripcion: "DT SERIES 3 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/4cdaccff4b3f4ed152e5ca65586592c745101afa6559a180e537d146119eb6f5bd23062cd06b690652ab1b37ca1912b4208c1dee251bc28e7e74e8f41f059118.jpg",
          Activo: 1,
        },
        {
          Id: 7,
          NumeroParte: "DT04-3P-C015",
          Descripcion: "DT SERIES 3 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/68a07e4a4e45421bfd54385bc583e5182a814b483ab82d936c2c94a2180a565fdf2a37bffb189c0be10322fa6ff871422b8f39b1e5b98ceb690c81f19873ce9d.jpg",
          Activo: 1,
        },
        {
          Id: 8,
          NumeroParte: "DT04-3P-CE02",
          Descripcion: "DT SERIES 3 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/da01601b53be241febf0f5fb03dacb17a0241f8ea91ecf73ed43821f0bf9e9a2b2ae7721fa3cb9d6af0202e5670f714d32edb4780ea5979149ec8cc02e3fb218.jpg",
          Activo: 1,
        },
        {
          Id: 9,
          NumeroParte: "DT04-3P-E004",
          Descripcion: "DT SERIES 3 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bc57003de26335dae204a6ea67a332cadc45e5f1f8e386d2a7bc051f6331ae85868e9955208c8f8f4b94e23a14bb46ceb4bb99b80fb98767632ad3145df4347e.jpg",
          Activo: 1,
        },
        {
          Id: 10,
          NumeroParte: "DT04-3P-P004",
          Descripcion: "DT SERIES 3 WAY RECEPTACLE",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f43f1cd07db8a3f465c43775b9654341ef4548dcda5f5bbff41c16d398cb81ab53c43395e41c01aa3657579a586f58f86ccf1674aeafbfff034bf2cd124e6da3.jpg",
          Activo: 1,
        },
        {
          Id: 11,
          NumeroParte: "DT06-2S",
          Descripcion: "DT SERIES 2 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e35a66eff90e26883a9cc76ce4f3041092586247092a335bc2e8da12229477ea951adf967b0b5ccebd02b636d696b381220c4c761b47b8f965f350617f4c4929.jpg",
          Activo: 1,
        },
        {
          Id: 12,
          NumeroParte: "DT06-2S-C015",
          Descripcion: "DT SERIES 2 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e78063bf29cfd2c11d59839628407045c6b556b82f05c8adab17cb6a30b2ee24a33f484a18c9ccbaeddee781f036fbc4ef260b2e17e569889a9b634772fde8be.jpg",
          Activo: 1,
        },
        {
          Id: 13,
          NumeroParte: "DT06-2S-CE06",
          Descripcion: "DT SERIES 2 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/7ce999d77deac44496ad29921e945a4f2318e5ce0f5ce5742dd9abed4e05a4a6f116ab8303f6bf23ed057ffaead44c6c75d98f6d4305c88beecad924470b38de.jpg",
          Activo: 1,
        },
        {
          Id: 14,
          NumeroParte: "DT06-2S-E004",
          Descripcion: "DT SERIES 2 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/fbbfc691e5b176b958d9e8fcc6afe28168cd16b704dc1d7ad357038ac0926be94eb04672fbd5d7e6696b49bcc0fc18fe858ea4b0c0157945c36cc9885a039eb2.jpg",
          Activo: 1,
        },
        {
          Id: 15,
          NumeroParte: "DT06-2S-P004",
          Descripcion: "DT SERIES 2 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/889ea60768455f31c8fcabc8381fd7fb6af6c88827206c9fb4f7ed2343362615c0e90191caa6773efb09eb31c0ef2f4a71aa600954e9220defb310ea48d0b12a.jpg",
          Activo: 1,
        },
        {
          Id: 16,
          NumeroParte: "DT06-2S-P012",
          Descripcion: "DT SERIES 2 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e107b140287fdfeef3c566e58096e7123ef8a8d9184a9f9b2d97ecc6ff0200b3aa4f445f63a702665335931aa878187efca4d6b9e49c002d433b4d057a69ebde.jpg",
          Activo: 1,
        },
        {
          Id: 17,
          NumeroParte: "DT06-3S",
          Descripcion: "DT SERIES 3 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c931ff114173db04638ace09ec702b243e4fbad04525de30b886236a60e30b13b9782f84f935bc4745eb8c0bf5321ca77012801db3a18f49ceae4471a7ba0211.jpg",
          Activo: 1,
        },
        {
          Id: 18,
          NumeroParte: "DT06-3S-C015",
          Descripcion: "DT SERIES 3 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ec92bbff2468662a24ba2c3a2a9b8b5ff1e0af8b3b3608f2ff8eb9c4ed735739efe85d2b0e19a3e293f3c936ed5b89cc89bad4bb709779ea8952de8441ab3cb8.jpg",
          Activo: 1,
        },
        {
          Id: 19,
          NumeroParte: "DT06-3S-CE02",
          Descripcion: "DT SERIES 3 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/8b0a1f2fcb998436028c39a59899d922fdc64dcfecbcfd026f678a6a2a2c7a81711832c5e448fd82f2b11914cd682617dcd0cb30e57de97c851b1f88610ceff4.jpg",
          Activo: 1,
        },
        {
          Id: 20,
          NumeroParte: "DT06-3S-CE06",
          Descripcion: "DT SERIES 3 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/3eea0558b1c46698901580f855b92e71938bc1bda733f297b30227858fd7a833776ba2a013de320c9affefd6acdfdfaf1b48e2b0739dd52a2b067dc1338496e3.jpg",
          Activo: 1,
        },
        {
          Id: 21,
          NumeroParte: "DT06-3S-P012",
          Descripcion: "DT SERIES 3 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/abf0ea8d15584a936659061fb375d2c58b96c7065bd7ee4ba239d8af02408128bf9e00f14e00fcf9d0ce37efa8f997416c9b884f6499150fa81c95f5372d94ac.jpg",
          Activo: 1,
        },
        {
          Id: 22,
          NumeroParte: "2292906-1",
          Descripcion: "PLUG ASSEMBLY, SEALED, 2 POSITION MCON 1.2 CB",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/79da0cd161e2f526aaf06f66905b989d47dc750d4261593c880196f8a451caa6e3fc21d1c60850730b78a1b52eb5e460f3b089ba92390c7e7b1cecf55e85586f.jpg",
          Activo: 1,
        },
        {
          Id: 23,
          NumeroParte: "2292906-2",
          Descripcion: "PLUG ASSEMBLY, SEALED, 2 POSITION MCON 1.2 CB",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/98f3ccf8271624bcc2038f34d44c55a00993b2192e74b40d6d67869787f361171e8e2cda0a504641d82d3e743337061fb548d9e84799bc852873219bb4bc4546.jpg",
          Activo: 1,
        },
        {
          Id: 24,
          NumeroParte: "2292937-1",
          Descripcion: "INLINE CAP ASSEMBLY 2 POSN, SEALED, MCON 1.2CB",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ba602db51043db673ce0beb61aeef419e69f43ce863fbf229dfe48f13e7be3976f1d3680a6637cbfeaae3d0f217302effcfab643bd5437b2daf8dc1dd18efaeb.jpg",
          Activo: 1,
        },
        {
          Id: 25,
          NumeroParte: "2292937-2",
          Descripcion: "INLINE CAP ASSEMBLY 2 POSN, SEALED, MCON 1.2CB",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/3bcef32cb1539a96579ca436e73afd8ffdc0ca910f58cb4e440346ffd7b0a4bf2137ab39a51ddcd5f04db974cd5412300e7b1b72eb95361453222653fdcadac0.jpg",
          Activo: 1,
        },
        {
          Id: 26,
          NumeroParte: "2293085-1",
          Descripcion:
            "1.2mm HEADER ASSEMBLY, 1X2P (2P) 2.54 PITCH, WITH SEALANT",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/0c537e418eb6b96b0da42e0428f5db79fefc581f92069b4c963b361176238792ad8f71d32266eb74167a861254ffe82a7c9e554975d1cb2d62058d4c2b4a3c49.jpg",
          Activo: 1,
        },
        {
          Id: 27,
          NumeroParte: "2293085-2",
          Descripcion:
            "1.2mm HEADER ASSEMBLY, 1X2P (2P) 2.54 PITCH, WITH SEALANT",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/156151f93caac87b1bc56a0ccac9543053f54afff7b558ec54b4d7d73622bd69f003e350bdf993de29e79143786fb3f20dc613ae4f8b8a65b56eb526a5ecbdea.jpg",
          Activo: 1,
        },
        {
          Id: 28,
          NumeroParte: "2294062-1",
          Descripcion:
            "1.2mm HEADER ASSEMBLY, 2X2P (4P) 2.54 PITCH, WITH SEALANT",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/7af425428b8dfa5c2c686313d35da4df4d1926f23525e94518bcb320c6e027d6b87ac4c11a0030230be9f7a2a4fd5cf184be377a88bd886a3d77749c6732c787.jpg",
          Activo: 1,
        },
        {
          Id: 29,
          NumeroParte: "2296802-1",
          Descripcion: "ADAPTER ASSEMBLY, 2 POSN MCON 1.2 x 0.6, DOUBLE ENDED",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/04bc42d8a3f2cf79ee5cf171940ac73080a49b16b2560a3ae8caa728813b50c7195d469cbcdbc56d58a6b899c81881842e9d8dce36c57dde0b043c14036242c9.jpg",
          Activo: 1,
        },
        {
          Id: 30,
          NumeroParte: "2296802-2",
          Descripcion: "ADAPTER ASSEMBLY, 2 POSN MCON 1.2 x 0.6, DOUBLE ENDED",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/27e0f976cbabf78251d51e181814160f45e4b39555028b7c0780c0b7d461a3b23ddd6fddf9e039a22e1a39145ade2c838cffb59df32e9ef17c9ddf537ae09bf8.jpg",
          Activo: 1,
        },
        {
          Id: 31,
          NumeroParte: "2296802-4",
          Descripcion: "ADAPTER ASSEMBLY, 2 POSN MCON 1.2 x 0.6, DOUBLE ENDED",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5d6c430f235adf5a2baeaf5ba538e6593598dd8d98e53a889c31087df7bf17a37f27e35c6888af276bff3d7dfabac2f11a5db35b8d51432aada69fd259e3b4e5.jpg",
          Activo: 1,
        },
        {
          Id: 32,
          NumeroParte: "776428-1",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f1439bb32903c1024e3194d86f1236eed8b01d2d4759b4888218dbda8cf984b4cd30ba0848aaf7ab656954db8c5784ff39c77d4a8a2412d6354855e2b0f513ea.jpg",
          Activo: 1,
        },
        {
          Id: 33,
          NumeroParte: "776428-2",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/582b403d485a23333942a5f5fdbf5afb64c34aff79bfb7e4eea85d118e01e2fca121e14dc5ee7ca0e7a6a6b960130161dbd76aae2df5ee2ea8775a09f55a8ce7.jpg",
          Activo: 1,
        },
        {
          Id: 34,
          NumeroParte: "776428-3",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/92d0ab1d5bb7e40734e1f2fa964e259c4b6c4fe0bb131bc653c7a76d0ebd4afbf64391b72019d2be8ecc3839686b62dd475b18d18853a647107b689e3c12b799.jpg",
          Activo: 1,
        },
        {
          Id: 35,
          NumeroParte: "776428-4",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ec8dbb6ca6dc2e7c2032447c1d63620ea649abf2ffbd0cdfa07bfda674ae48473ce1bcbbc5a6ae33b6dae05d15d8a0345b77a5641cb4738cf68ba1de6e0bed06.jpg",
          Activo: 1,
        },
        {
          Id: 36,
          NumeroParte: "776430-1",
          Descripcion: "CAP ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/92ce87fdfb8a04891b8c16b3e005b8d16197112f0aca94f341b6b0b69489e450e66c2e3318596483121df6587314bc2d379937c455fe3e056a258bfe7bdd874e.jpg",
          Activo: 1,
        },
        {
          Id: 37,
          NumeroParte: "776430-2",
          Descripcion: "CAP ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f1fcaaccfce307685be2790297e547196ae9e2b6951e19601dc64abcf8ba7973ec29121399a50602791f89df7f0212b4f7bec2dddf892ab756dbbfb1a0995042.jpg",
          Activo: 1,
        },
        {
          Id: 38,
          NumeroParte: "776430-3",
          Descripcion: "CAP ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c3c6146cacb7cdf2f90332b5f162c464cdac6972b4ea0e2f45331671bb06e2faae4480df37538f10e96ff35cf4faebd05659bc0f6140077a03dba9b2eee8f111.jpg",
          Activo: 1,
        },
        {
          Id: 39,
          NumeroParte: "776430-4",
          Descripcion: "CAP ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/638a7197bf8dbf52a19b3dce7e5f30cf899c4f95b5688a4f26bafb586f2efbc168ba0c912e1ff1903c79e7ddb1083112acf23d9d49754bbc70eff7c2ad9918b8.jpg",
          Activo: 1,
        },
        {
          Id: 40,
          NumeroParte: "776488-1",
          Descripcion: "CAP ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/71e77cf946ff28159eeffdad4ee86a9e2108330a94a8867fd05a430a2631caa9ec67228329637f43582df5f2ab38ebd9fa8c6a80f735aa8cdf072733249b2e10.jpg",
          Activo: 1,
        },
        {
          Id: 41,
          NumeroParte: "776488-2",
          Descripcion: "CAP ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ec2a9913ed8bbbd621aee78d4644cf456549fca7bd31e9461cbe3ffa5462d91c581ec2dab4961eab61002d4a93922a8a0e4b3a9ef1306ff4d9f3f8b7750af5fa.jpg",
          Activo: 1,
        },
        {
          Id: 42,
          NumeroParte: "776488-3",
          Descripcion: "CAP ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b31fcc81fc3ef4636a3a19e5c43dd295d9c735c00127b420cdde88791e387a5f8eb1751c3c3202feadea53f21c620890923cb14ad9d809ac82726862d08d5037.jpg",
          Activo: 1,
        },
        {
          Id: 43,
          NumeroParte: "776488-4",
          Descripcion: "CAP ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/22d25bc8964097a7cc85e7d5178bbb81ff829a34c371c5e73e74afab468c0edaca6ca0db895bfd203fbf446cf41da2bc1b8e97c2003de7e6296fccd495f54206.jpg",
          Activo: 1,
        },
        {
          Id: 44,
          NumeroParte: "776534-1",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW REDUCED",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5f1eec75f7ca722bdd44c81ffec04de01f4d99960ecb9d2c46c3d96e95a7eef5b5dcbbc75fea59f9b1ce65cbf59322790b467a92f487c077b8aea34aa3d25aff.jpg",
          Activo: 1,
        },
        {
          Id: 45,
          NumeroParte: "776534-2",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW REDUCED",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/4707853c2bf6aaf06872a745607a7edb932ffe54caf70c6783eb137b1b24094433a513878e25d1694ddca90033179f1ec11417b59d8a3afddb1ac24caf9989e5.jpg",
          Activo: 1,
        },
        {
          Id: 46,
          NumeroParte: "776534-3",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW REDUCED",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e7abb11929517fc60242db7baaeb579b5ecfe1b61698ed4568eaa478bb6a1e14c5dd9e3df015542540ba8c6e9d9ad5c056410f60afbd5c9710966d0a74493690.jpg",
          Activo: 1,
        },
        {
          Id: 47,
          NumeroParte: "776534-4",
          Descripcion: "CAP ASSEMBLY, 2 POSITION, SINGLE ROW REDUCED",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e9baf6db02b30d0971c757675903594cf4ca0b7ea731b92c71c331057131674cbaf52808522a2d128f77a161e2c1153d83151b6071130ae30267fb02440001a2.jpg",
          Activo: 1,
        },
        {
          Id: 48,
          NumeroParte: "776535-1",
          Descripcion:
            "CAP ASSEMBLY, 3 POSN, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b4487e78120951965ecc60a4b76367454a1efd0dde2c41761a05a0fa72d823733bea56e13c7bcc542104490751a30712f64314b06e1d50efae21f8a4a77fd0c7.jpg",
          Activo: 1,
        },
        {
          Id: 49,
          NumeroParte: "776535-2",
          Descripcion:
            "CAP ASSEMBLY, 3 POSN, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/2d6ad3ae09b2b208a7670f3720c199ab504f7c3d2c41b826b18f84fee39e36e5c7e398ea87081a598b71f52e83460e1cac3bebd37557b9f360c66c6466f119fa.jpg",
          Activo: 1,
        },
        {
          Id: 50,
          NumeroParte: "776535-3",
          Descripcion:
            "CAP ASSEMBLY, 3 POSN, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/0e47c7e7eba2728635efd0ba6daf0f2fd8fe511ddde07d79a6e4a94eb5c6375b896ee4d0b20a8b8cb0ac9e0b9d20ae18eb62d4948b1c1ed4899d75ea18bcfe85.jpg",
          Activo: 1,
        },
        {
          Id: 51,
          NumeroParte: "776535-4",
          Descripcion:
            "CAP ASSEMBLY, 3 POSN, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/96940d41edf174647b27656e09688f638bc4a7e68a20165a9eb15d73e955c322623b08a0cef69f4a1f1051f90ffab1acbb6efa638678ac0bf8e7fa25b2e0f454.jpg",
          Activo: 1,
        },
        {
          Id: 52,
          NumeroParte: "776434-1",
          Descripcion: "CAP ASSEMBLY, 6 POSITION, DUAL ROW,AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c81c34a249da1834e09bae0abdd64a8bab11c87dd9972a4933614fa2ef7c855ac692b7d22030606598b871a8bcb00e63c44131338c2a9246b1bffc2058ccb944.jpg",
          Activo: 1,
        },
        {
          Id: 53,
          NumeroParte: "776434-2",
          Descripcion: "CAP ASSEMBLY, 6 POSITION, DUAL ROW,AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bc372b36b38bab7d7d0d4ced3e0d4e80e6022950c3a5f5a5600f42134fecf244ea2a081244d4008766e77199f586bc42396b63c035ceb6422a475c96e2e2f624.jpg",
          Activo: 1,
        },
        {
          Id: 54,
          NumeroParte: "776434-3",
          Descripcion: "CAP ASSEMBLY, 6 POSITION, DUAL ROW,AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b32ea3c51551b126d6c5b39c0de4a344ce12d1f3b03168666e761ae541f8bd25a53357c7f896033f42d579476835c93e25c36317e7285755354da9a9c9fa35ba.jpg",
          Activo: 1,
        },
        {
          Id: 55,
          NumeroParte: "776438-1",
          Descripcion: "CAP ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b0f7fe639ae98a293438e4e31e0359c0be28261731e46b910d81e30437f61187e484780820e4cbc64412c25a2a15eedd22933ea0bfca2bb16bd559bdee053fe0.jpg",
          Activo: 1,
        },
        {
          Id: 56,
          NumeroParte: "776438-2",
          Descripcion: "CAP ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f444104588ee8a64798ba211f14ff3f368bdca879c1ec1b74777b2283bd4c45e56189b4df1513eacb84534ea021e9cdda03cd2a4cb4b78d7b9e286d2b7ebadec.jpg",
          Activo: 1,
        },
        {
          Id: 57,
          NumeroParte: "776438-3",
          Descripcion: "CAP ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e2ae3d0a1486031aea79090e8e81a79e5d3f5ad8bb91c6cda99341016cbdf6fd2853997a5c0d2f775f15cbc6371e40ed4e13d9c7f98fb55530700297c6e13770.jpg",
          Activo: 1,
        },
        {
          Id: 58,
          NumeroParte: "776438-4",
          Descripcion: "CAP ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bf783e09e807244c391abac796b4e9d0c5b9a6a9a3eb6d960201dfa4f7cf975858a41cf968975262ce2a3c77264a7c61fe2dc4922773f20510bbaf59bd7466bb.jpg",
          Activo: 1,
        },
        {
          Id: 59,
          NumeroParte: "776495-1",
          Descripcion: "CAP ASSEMBLY, 8 POSITION, 2 ROW, ATAC CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/3ee97831b4596024a5756b5a3c7b3f2502a44f3ac31ab10b693dda1b2195cbcdc114ff62e066a1087939194a0fb451a1436ee94d14cf90b474faf957112ddda1.jpg",
          Activo: 1,
        },
        {
          Id: 60,
          NumeroParte: "776495-2",
          Descripcion: "CAP ASSEMBLY, 8 POSITION, 2 ROW, ATAC CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/dc839ed76e2ecb479ba77ab28ef040f4ecc9b0037c7f3e6dd7262fe71724b1be0330a6c39a8e78b6cefb3cc81b77b40df9c6125de1d3096af1c7d1f6221d2dc8.jpg",
          Activo: 1,
        },
        {
          Id: 61,
          NumeroParte: "776495-3",
          Descripcion: "CAP ASSEMBLY, 8 POSITION, 2 ROW, ATAC CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5791dc03f695562e3d45d58cbcbdc22e5733c6dc835c017bd5f27ccee93d347a33de351d52c103272ad32ff0c6be885c727051479c3b4ea293b73d46050b85a6.jpg",
          Activo: 1,
        },
        {
          Id: 62,
          NumeroParte: "776495-4",
          Descripcion: "CAP ASSEMBLY, 8 POSITION, 2 ROW, ATAC CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/749fc444a4fd3b556f8a455f4228e39161bb83c30143bc94c06b0da5bed5812a4548724b02c1addc02766c053f4c1595b14a1ef1d7245696026eb85d3c5253f0.jpg",
          Activo: 1,
        },
        {
          Id: 63,
          NumeroParte: "776537-1",
          Descripcion:
            "CAP ASSEMBLY, 6 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/4ebbfd688e6bd3c8b024417ca6f021ed6e5ebdb44e9eef5f154d41e340149ade075142990556f0e62e9da317a47360a7876022669dde12f8e9c788ed6486e7ff.jpg",
          Activo: 1,
        },
        {
          Id: 64,
          NumeroParte: "776537-2",
          Descripcion:
            "CAP ASSEMBLY, 6 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/6bf5a11a008b12b095d7b9e3252a03aa54ec26e5a1094f73872ef8e312998b05b7aac9640a29b36445d13f33ff3780497794d2852f5be5380e3c6b92126ebdee.jpg",
          Activo: 1,
        },
        {
          Id: 65,
          NumeroParte: "776537-3",
          Descripcion:
            "CAP ASSEMBLY, 6 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d3719328603ab6adcc466f9c43d0ebebeae221f2d2c5e56ac3d54ca76c61c8a8a380b23705e85b4af4624be793afb7f6fc0971c8eb6a7ac1ca90753564ca0ee2.jpg",
          Activo: 1,
        },
        {
          Id: 66,
          NumeroParte: "776538-1",
          Descripcion:
            "CAP ASSEMBLY, 8 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/9dbc7693fae2f75270c2176bb835923bd88319adf161b29c52b153ff3075760562d0ddd494ee67c7d82b89870f8be53afd68347040d89d94346228830fb55313.jpg",
          Activo: 1,
        },
        {
          Id: 67,
          NumeroParte: "776538-2",
          Descripcion:
            "CAP ASSEMBLY, 8 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/dd1942e5d1df831e69b4398af1400e1c0279a2526841dfc5b7b11041595ae5ecd7856ec032bdfd344c7e2a230ea6e58482113a68176a046263c99769a52a2f14.jpg",
          Activo: 1,
        },
        {
          Id: 68,
          NumeroParte: "776538-3",
          Descripcion:
            "CAP ASSEMBLY, 8 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/01e2dd298dd0ddd819363115b900239461f27b59470b5f25ae17939a7e872b8be523917cd91fd389687ae810ac1d9c7e14991bbab9b4e017b6d5752fbd1addbc.jpg",
          Activo: 1,
        },
        {
          Id: 69,
          NumeroParte: "776538-4",
          Descripcion:
            "CAP ASSEMBLY, 8 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/6e588535d373861e68a679b1658aff82169d3f44dff4ef9bcb728427c8c5258284756fe184ed2b90139aa0d464791ebb700a0018902ca8eae48a422470113b7c.jpg",
          Activo: 1,
        },
        {
          Id: 70,
          NumeroParte: "776539-1",
          Descripcion:
            "CAP ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL,AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5caf328bc8cf002a4435bfa1c4b95cb53ed9c61ff2d8795105897a4b8f1658c3ecb1668defdbca73f1aa263b68b7f02c6ac9e67ce55ed306f7fd534a566ab0e5.jpg",
          Activo: 1,
        },
        {
          Id: 71,
          NumeroParte: "776539-2",
          Descripcion:
            "CAP ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL,AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/de8a8a20c2d7108dcf94a30c1ae7a36017a62361c7af73ab2765ec430831824b1198d04534cef92d481adbee4914e33b581b563e223e37047e4fa4a16ef550e9.jpg",
          Activo: 1,
        },
        {
          Id: 72,
          NumeroParte: "776539-3",
          Descripcion:
            "CAP ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL,AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/05307b12c6a9c621dd773463eb2ddfb1336bae98edbfc233e244c2f9c592309ca240a1fecab207689cd8d4fac9743d8a31deb277450a57dfb90dde4032344f14.jpg",
          Activo: 1,
        },
        {
          Id: 73,
          NumeroParte: "776539-4",
          Descripcion:
            "CAP ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL,AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/17dd005361a35b7394393440d417230c8eb8f7b7e4ea08b643d3371962cded3421d2c7337a98a01e1b7f334f19cec936a4a75826c959547d5877d61e4e2a8620.jpg",
          Activo: 1,
        },
        {
          Id: 74,
          NumeroParte: "776427-1",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e115b1f06e2d16bc04f8b7b7d73a86ee8ae2bc9bb507e162ee670daaa8efc249b57ad30e932b5724db545f3fab0724f94560d6f905e1631b3c75aac348c7b4a3.jpg",
          Activo: 1,
        },
        {
          Id: 75,
          NumeroParte: "776427-2",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f441b6e63fd246070b9220bd1334e2a5933d5c6dbed16b380bd9fe013a66582a83fe2f6f514cbc1b28247b0d3b1432325deaf5fe8a27e3afcfa4fa84b6f4544d.jpg",
          Activo: 1,
        },
        {
          Id: 76,
          NumeroParte: "776427-3",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ae2b9cff9413358f0113691fb236216a292414dab82bcf57febbff84b5f3266558e49fa64cbf919ddb73e81fb22e9f203fff0f98429d24fc15b81e077087aedc.jpg",
          Activo: 1,
        },
        {
          Id: 77,
          NumeroParte: "776427-4",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/3f26d9276ec5d386057d33ebe9245261bda9b88febd11aa0e1a1696034f53b9071e1ffac7aa2326f4afaea03428a112b11abf28c7820372d78bcecf9679e6410.jpg",
          Activo: 1,
        },
        {
          Id: 78,
          NumeroParte: "776429-1",
          Descripcion: "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/8377ea3c11cf8a0f8850e733bdf7c5649393ad7368454a06f908305d23c245c16223005c382602edcfde3f93038448c0b249ba4b0e9c7fc0bc39d9cc795ffc00.jpg",
          Activo: 1,
        },
        {
          Id: 79,
          NumeroParte: "776429-3",
          Descripcion: "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e475dab801901b31ce6bfea90ebcf9eada126e0f333da6eb04d7998930bc2f6fee91259da6dcd6571c78d0d30559a02915307027fed83dbbe3a16d20a23c432f.jpg",
          Activo: 1,
        },
        {
          Id: 80,
          NumeroParte: "776429-4",
          Descripcion: "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/fcb72f550131776612597ea14ddc214664262a19e44c18e25a310503e693d1b5d849496feb4b55d4d0d27aa75247b7c81323dec7ad5dc1e6d1150796971d0171.jpg",
          Activo: 1,
        },
        {
          Id: 81,
          NumeroParte: "776429-2",
          Descripcion: "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/4645071efaf24ef388f9bb6edc668634c85e7ffc9cd7074cf72f0c1edd0c849511775abc906372961719a9a90806ba58100bc716e4879a1e25d104e08951820d.jpg",
          Activo: 1,
        },
        {
          Id: 82,
          NumeroParte: "776487-1",
          Descripcion: "PLUG ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bfc96d1f50a489cacd1f765e8d3e103eae9d323b83625b4f99e0fe87c30d0a4c0c58748467cbcfce363451d1d0202ce996cabe8ff5c4634c214c821c000b7cb8.jpg",
          Activo: 1,
        },
        {
          Id: 83,
          NumeroParte: "776487-2",
          Descripcion: "PLUG ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/79fbc05e254482bacc66a7f37ceef9237c5e76953514e98842b281e592a9cc57058c06f7cf5dfe4f4905c6f2c67ac170bcf559ff7952cd9c433b7d2c034e82df.jpg",
          Activo: 1,
        },
        {
          Id: 84,
          NumeroParte: "776487-3",
          Descripcion: "PLUG ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/9d7c866aa2f8e89bef563d06207e8433e47bc4c6e538c02d68c9cbd7ac87d5534d523772ef7df1edc825d36b2d742bc4a43d2fe2be8cbbd01a513fbfacc1ecbf.jpg",
          Activo: 1,
        },
        {
          Id: 85,
          NumeroParte: "776487-4",
          Descripcion: "PLUG ASSEMBLY, 4 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/4d117553566136e1889a92d91db40e9ff6d27b297c82ed4ab48982d1e9216bef905e0b70493fdc70d4cec6e0fd96657a9e238ae83ea20bdada15f40483facf43.jpg",
          Activo: 1,
        },
        {
          Id: 86,
          NumeroParte: "776522-1",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/cf69f7900590ee57b757b079490cdc23c4d127ddce500bcc6db45d729c076056940c2ff7eb8ab9b5b2974335230390542fe3006ffe0dc6893e268c5bdff8fc83.jpg",
          Activo: 1,
        },
        {
          Id: 87,
          NumeroParte: "776522-2",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bdebb6bbeed7fbd09783d8ef7e1d587b8e3c6b1da813e2198877f161648715deed7cdeb3b772955aded07d87ff989cf5f50f00600a9de4e848669ca65a0772d4.jpg",
          Activo: 1,
        },
        {
          Id: 88,
          NumeroParte: "776522-3",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/cec61fa61d785885e4f82dd9e854ca41218485cfaca819f7b34721b3ab7871981d761f44987fe67b59cbf967c93a3b9cccf1a886bb6db6c7d1bb01054d306581.jpg",
          Activo: 1,
        },
        {
          Id: 89,
          NumeroParte: "776522-4",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d475a0bd0b7836fbc4a54a64130705b035af353ee83ac9ac92d038d8f4ea607115846da1de369da96d2c36b8ead294f89566234f030b93bd41d6e42a69894df1.jpg",
          Activo: 1,
        },
        {
          Id: 90,
          NumeroParte: "776523-1",
          Descripcion:
            "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/cfecafbee4f81ba0e509ce6fcd06a5e618717d981131be2194a2e69a1316e7c9a163d6842cfe04d7ddbc3cf53c0b31a693c3a49952ea2ae820a83bccf1b4b3c6.jpg",
          Activo: 1,
        },
        {
          Id: 91,
          NumeroParte: "776523-2",
          Descripcion:
            "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/084c518212f63b095504b13278f21db9afe4d744363a3f2963e5461597cd8726329c217f352babb21ca223f891d02235e2aebb7a75545572a496433fe0799120.jpg",
          Activo: 1,
        },
        {
          Id: 92,
          NumeroParte: "776523-3",
          Descripcion:
            "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/af7cfe505b12d170ced45dbfdb9a9c48d0d1e15f6f9e8204cf305742ccd0dbb3222feb528d71273049cfbdf435c7340e2912b312729983b9260b75e5f540a077.jpg",
          Activo: 1,
        },
        {
          Id: 93,
          NumeroParte: "776523-4",
          Descripcion:
            "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/65ec0dc5cfec3ff565141d97d769565391128afb58ea452ad04b046f02851b29d4441077c040debe3a9a41309dc7b5afd2cdcf9f0159dc6ed92596b1f091fbc1.jpg",
          Activo: 1,
        },
        {
          Id: 94,
          NumeroParte: "776433-1",
          Descripcion: "PLUG ASSEMBLY, 6 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bd426c02dcbf52cba038184486c24cdd2f4faacc618809ad847dfb78a1613034afe7fb105fd51fe2d619252030520a8966cd25dae0fe2d5f631be69a546135c2.jpg",
          Activo: 1,
        },
        {
          Id: 95,
          NumeroParte: "776433-2",
          Descripcion: "PLUG ASSEMBLY, 6 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d096d0453dd371e9287351528c6b3575acb13cb92402893b4478f0aa03e0966cbf80697afa9518b8f2e1c2f247a378ac4c699a5d32dc8a8882dd67f8bc992928.jpg",
          Activo: 1,
        },
        {
          Id: 96,
          NumeroParte: "776433-3",
          Descripcion: "PLUG ASSEMBLY, 6 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5c8f0ac2871c3c68ce24958f18fd1197d8462ccc09fef40e21e932ebe9a387c2443079c386d975aeaf7cfe3c0b7a12eeebec4dbb4f8f4366bbd427041e7cb6cd.jpg",
          Activo: 1,
        },
        {
          Id: 97,
          NumeroParte: "776437-1",
          Descripcion: "PLUG ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c4629bfdcba159055c7731ec89e08af9eb8229cf9fcd3019d479934ea84792ee291fd19292ff978fa9715ced1b5b15a83a8acb7f5694b4413ec9380ec2c154c2.jpg",
          Activo: 1,
        },
        {
          Id: 98,
          NumeroParte: "776437-2",
          Descripcion: "PLUG ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f56d50bf73082023dc838353f555767f0417bc67975a2a3fd48f300e7ad6a50f4c3da62dba668989d0af305a9b0a24f60593f9c740c9b7f88bd21eab2d840935.jpg",
          Activo: 1,
        },
        {
          Id: 99,
          NumeroParte: "776437-3",
          Descripcion: "PLUG ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/6226f6ba728a505971d4850c9700a8a4eb0b8769f564f9a43f42f10c76c6ed2fe5941a1d74f9c0e2a65c3cfb46caaeac9554dcc9351838feb82341aba8201302.jpg",
          Activo: 1,
        },
        {
          Id: 100,
          NumeroParte: "776437-4",
          Descripcion: "PLUG ASSEMBLY, 12 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/48a8cd671c0d08a0de3d2dd5b00367d60b0aa22bd2cf9d7f12054b05b798fe9dd06552056c744231e4c187f81ae07b110217ae8045cdf8fbbd2d6724a95dec97.jpg",
          Activo: 1,
        },
        {
          Id: 101,
          NumeroParte: "776532-1",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/a55321eaa9ac6500fe3c366d1cec9d80bc2841b74dbd94ac2b3f946cc9de8943f1baa7093fe749a12863edee2700d7b01069e78fc4ca06fee0f52bd6924bf8a5.jpg",
          Activo: 1,
        },
        {
          Id: 102,
          NumeroParte: "776532-2",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/aaa9f9324eaf157a1fb4df08974f5a28d892048e4769f32fe767e23c502e1790fffd2e509cd089923e02229c7eedf775a4b652c88e78ed8863c7d1486171440b.jpg",
          Activo: 1,
        },
        {
          Id: 103,
          NumeroParte: "776532-3",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e5f96fd8b4902bf250f5839f90aa6ba6eeb2edd79f76ee985b4a319a6031d8afeee5fbabe1e788923b1ababd65f13bbf562a5f76ef0d73a99746cb7d5f2ff083.jpg",
          Activo: 1,
        },
        {
          Id: 104,
          NumeroParte: "776532-4",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5b167c43d6e40aa545199ee226aaa60444d2bf2715d04fef5959c5e129a6e4ed4d8db82604ef2949db3cc2badf4a13bdf22d41663ed47034cb9e5cc125d6a958.jpg",
          Activo: 1,
        },
        {
          Id: 105,
          NumeroParte: "776494-1",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/94bc33bee0048da4a8b86c95cd1820994fdc8a99a847d1fa60fc0a5db0999fcb65cacc966b561a0484d21dfc75da537dc2f96207387096b3ad1c51d41e13f6c2.jpg",
          Activo: 1,
        },
        {
          Id: 106,
          NumeroParte: "776494-2",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/802640ee0314467c9a45c1360a9bbf182b25209cf44f3d702359e5f8978665d13c56b4f5dc2ac8c5f49a554b1d9148ac5d1b0568278d822a9f7001c0d5616a64.jpg",
          Activo: 1,
        },
        {
          Id: 107,
          NumeroParte: "776494-3",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/89825149509894f785a756bbb3ed54d3ba6517c16c67d0a1e94c15b0f1405a25eb90fb6c3823484834adc5be675f66d3450008d12c124ac6d17abb6e1ea6a375.jpg",
          Activo: 1,
        },
        {
          Id: 108,
          NumeroParte: "776494-4",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, DUAL ROW, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c52ce22b0870ffce950c684daaf72c688a7195b219bc91080a38b5d220a986bc84694f964f5c3cabe996f99b453c51e4fa3337bbf1c013e2c6adb099c1a09512.jpg",
          Activo: 1,
        },
        {
          Id: 109,
          NumeroParte: "776533-1",
          Descripcion:
            "PLUG ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5129663040b71badc870a9ece8572f5de68f4e1fff4e93a867a5228442ff2de2485efd9ea0bc8c663122b4dca34dd3fd8420711339e8f8ab5c9ebf6ed9f2db2a.jpg",
          Activo: 1,
        },
        {
          Id: 110,
          NumeroParte: "776533-2",
          Descripcion:
            "PLUG ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/342e24b0f66020d7a46134285189bad688ddb2cc2acbb1c6d1203afa6cee41298f56a3dbaa96c87b7f2e5130e06c244a2f2ec9ecd9395cad576d94d21875a695.jpg",
          Activo: 1,
        },
        {
          Id: 111,
          NumeroParte: "776533-3",
          Descripcion:
            "PLUG ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/beab9caa8d3b2c973e0c63e3a1794c4b0dbeb256f9a7dcd141e6ee585101c2131b690dea40a3f905f6d2913cee9b2b6e1582202519355a59f2e44fa3c0716063.jpg",
          Activo: 1,
        },
        {
          Id: 112,
          NumeroParte: "776533-4",
          Descripcion:
            "PLUG ASSEMBLY, 12 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/72e840eeb92215d3228e7e4bc182d4db983a875c7d4b36336bb8eb7a1d67fd9f88cfd1b7d17c1f8207ade24de24d75e409a41ddfe5bbf4ff40b9eb40d29e31f1.jpg",
          Activo: 1,
        },
        {
          Id: 113,
          NumeroParte: "776531-1",
          Descripcion: "PLUG ASSEMBLY, 6 POSITION 2 ROW",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/440b5fd841f76906056bbfbe275ae99735f11fa505bafb6b35c48ea24459baf292eb1167fcfa389f524e45b965ed22f222af9999098e8922eeece794045e6e2d.jpg",
          Activo: 1,
        },
        {
          Id: 114,
          NumeroParte: "776531-2",
          Descripcion: "PLUG ASSEMBLY, 6 POSITION 2 ROW",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d4458566fa0ee8de8a76ac2c396697ef8d354736d55f6d3fac1b1ead4a60cace318232780731fab4e748e075ce792128b575c723c8a3cb66639d2df29879ff75.jpg",
          Activo: 1,
        },
        {
          Id: 115,
          NumeroParte: "776531-3",
          Descripcion: "PLUG ASSEMBLY, 6 POSITION 2 ROW",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d295a05eb70df58c10439d8791e5d251432e223854be3ef0e70845b30d814c13ea03006f3b5a0ee71495ddb124c4ca31beaccbf97b043a993afe5f3be1e17eb3.jpg",
          Activo: 1,
        },
        {
          Id: 116,
          NumeroParte: "776536-1",
          Descripcion:
            "CAP ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/40c18cd5afcbd2d3a2ddcec13d6679b9e93819d80e09fb8586161c2bae348f7d0e65079a3ce09fefa9a27fdb5bf650c67d1e259def954702f2121f1ee4f352ec.jpg",
          Activo: 1,
        },
        {
          Id: 117,
          NumeroParte: "776536-2",
          Descripcion:
            "CAP ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/51005a0b6393665a137656da1224804084d5474f6475fa4453a7ea9002c1fcd5fe9074cb63a7ad90c4ca5f68fd39d9293686b2c682bf97e78b73e3bd3ef20c6e.jpg",
          Activo: 1,
        },
        {
          Id: 118,
          NumeroParte: "776536-3",
          Descripcion:
            "CAP ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/aa31c9fcbc320800edefece60620831f86fb6bda2f5dfb4cba664cb4144b1f8ce8f53230fe1ed61a6ddf110a7896a757a26120c6376a614a8aec73de785c8d5d.jpg",
          Activo: 1,
        },
        {
          Id: 119,
          NumeroParte: "776536-4",
          Descripcion:
            "CAP ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/71913eb72184502b61da5bb08f7aa994e4ee53c842da080037816341d223a9249307b26a93048cc032f359addd53e654d0687b0b27eb2483b9002e042b44c376.jpg",
          Activo: 1,
        },
        {
          Id: 120,
          NumeroParte: "776524-1",
          Descripcion:
            "PLUG ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/4e09e1d2106458d28685471d036f380692e57c0827ddbe6094f14e4e1d11dab08b9c63f4c158d2c29d984e912e08dc04c75df963c4ea79f7775c6b8cef4f47a1.jpg",
          Activo: 1,
        },
        {
          Id: 121,
          NumeroParte: "776524-2",
          Descripcion:
            "PLUG ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b5b1974af8d5b8cae34114e9803fc4ae096b477ea46cb98f55f49a5c97fbd16e55d82c4709bd4d230646710549d31a867d333666d75bb1fa72d3f8c6fa7cedf6.jpg",
          Activo: 1,
        },
        {
          Id: 122,
          NumeroParte: "776524-3",
          Descripcion:
            "PLUG ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/80113a4143ebfaff80404eac7e868cfe4c7c29d94ff372bd67c325516ebd3eafa29c5de3f029fd491cc91292b94f3d1e605d6ee6cc1c7520f01564a9af813c92.jpg",
          Activo: 1,
        },
        {
          Id: 123,
          NumeroParte: "776524-4",
          Descripcion:
            "PLUG ASSEMBLY, 4 POSITION, 2 ROW, REDUCED DIA WIRE SEAL, AMPSEAL 16 CONNECTOR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c8034fd41f032c1c45a711adfc203d5306a20e907e004a9167de7dd09b3784b06deb43f2aa3e17377db98b19b3c12bac9b93621093c03b6e83250caeb85eb3c2.jpg",
          Activo: 1,
        },
        {
          Id: 124,
          NumeroParte: "2307400-1",
          Descripcion: "51 Pos. Press Fit, Header HSG, Assy. 2M",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d23495cedd7b6b8de5926f5b5f6a94541ff3ec520b62fed6f9e4a3b76776cad82f423aa85ce1f0f5f6b6bba03737bbe29f0371cc525f8c2f7c5124784c643b41.jpg",
          Activo: 1,
        },
        {
          Id: 125,
          NumeroParte: "2307400-2",
          Descripcion: "51 Pos. Press Fit, Header HSG, Assy. 2M",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/8f88ee7a0f09d76960ba93d7aadf8d46a38ec5bd1eb628e65df8ac26ce3c9de9d5402a693e48c09782a0e7e06477338366dcd70183e079ca63f27a944d43b7f4.jpg",
          Activo: 1,
        },
        {
          Id: 126,
          NumeroParte: "2307400-3",
          Descripcion: "51 Pos. Press Fit, Header HSG, Assy. 2M",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bae28e3388824e972215d29e983148ad2f5ff4c7f9b744480379a6ed1442da2b72ebd0d1ebb320186e5b7113bb7d623ecad325b0afa7e8e67697b47604b1b8e2.jpg",
          Activo: 1,
        },
        {
          Id: 127,
          NumeroParte: "2307400-4",
          Descripcion: "51 Pos. Press Fit, Header HSG, Assy. 2M",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/cb9b87019acd4eb95c956f2e8d3ef7a8dd902bbd66a399121d3ceb31ab0a1b2ae7bf3da58cd87570a3ad34876a3758b28f7fbd0c69d64d98291a91ed9a4599c5.jpg",
          Activo: 1,
        },
        {
          Id: 128,
          NumeroParte: "2307403-1",
          Descripcion: "2M COVER ASSY, SLD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f443037af309ad76eabd591c5f9dd7a3cf8852e7ab90960e6f46118c8f8b74eff086138b9772d51c890cac63efea629d3b7513f83cd41bab6c81c94312b14ef1.jpg",
          Activo: 1,
        },
        {
          Id: 129,
          NumeroParte: "2307403-2",
          Descripcion: "2M COVER ASSY, SLD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/9af1a0c2a110843f357df9e91112dc48e02d61f1e1835371c5ef439a1a39fdad4186d0cac61e327fc4e417594a678cb7ad2369ef364f83a9ec39572845ee1a9a.jpg",
          Activo: 1,
        },
        {
          Id: 130,
          NumeroParte: "2307403-3",
          Descripcion: "2M COVER ASSY, SLD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/a3d28af7bbf507618b6b55f371a07cad053d0e0bea27f3fa51cdc56f142bb14ef32c14fce0f2d5e2a34fa06812f19c44b82537ecce89968506034b15b9f77f5a.jpg",
          Activo: 1,
        },
        {
          Id: 131,
          NumeroParte: "2307403-4",
          Descripcion: "2M COVER ASSY, SLD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/627bff1e935a7f8040c00d9d787eb70ab998beeb11ce41e0a6198aaa7259510d34ccb55272ce3fedf1af5a4dc8eb50582af6acd54ace61cf05ba6fc7a6edfe15.jpg",
          Activo: 1,
        },
        {
          Id: 132,
          NumeroParte: "2307403-5",
          Descripcion: "2M COVER ASSY, SLD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b6dfbaf767645fad397dd479f2ab9deff14490d4d8fbb3148990f9bc0afff5fb00b72a56864363bc79e3ab563c2f4bc6b311d874f9897ad9653104e3ba0837f9.jpg",
          Activo: 1,
        },
        {
          Id: 133,
          NumeroParte: "2307403-6",
          Descripcion: "2M COVER ASSY, SLD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b6b81ed42e49e38d97909b1ec49c1cb72d6ad26739c02c2f573dfc91b5dc3d0ab91386087d46dc16bd57d2a1701921e14eb5feb2943fe8317cb278fa5d0cc93a.jpg",
          Activo: 1,
        },
        {
          Id: 134,
          NumeroParte: "2307403-7",
          Descripcion: "2M COVER ASSY, SLD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/98d98abc5e2ae136a202d9ffc878b055e6f7f526f14717f2188d86b58256730e9aca67af1f3443d4e4f2fac6a551d790110c654547e6c7844b50737b16fb2dc6.jpg",
          Activo: 1,
        },
        {
          Id: 135,
          NumeroParte: "DT06-3S-E004",
          Descripcion: "DT SERIES 3 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/9d68e46b9d1a2f4c49d9b3ec9bebb93db3285aa35eeda4e6654413f1953e11326b5256544d8d1c30c6f209840abbf4dcfb235f8bcb00602ff5763bf6bf095746.png",
          Activo: 1,
        },
        {
          Id: 136,
          NumeroParte: "DT06-3S-P004",
          Descripcion: "DT SERIES 3 WAY PLUG",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c74bfdb59a14f570bac51347d0a2111a065988f60415c187c0c71717c93383bca959a52c6ecd5793c96e089673b12c724289f5d610770818d3b72d721e98d02b.png",
          Activo: 1,
        },
        {
          Id: 137,
          NumeroParte: "2314363-2",
          Descripcion: "Solenoid Contact (Formed)",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/2e68b7ec52e535541c0805bf7bf01e755919e2c6bf30941d62cb94ede0613b963425e03f254b23f03c33ca1eb97b5bc2f27a17cfa6f3472db614b1e35ddf3085.jpg",
          Activo: 1,
        },
        {
          Id: 138,
          NumeroParte: "1456820-1",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 139,
          NumeroParte: "1456820-2",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 140,
          NumeroParte: "1456820-3",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 141,
          NumeroParte: "1456820-4",
          Descripcion: "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 142,
          NumeroParte: "2035560-4",
          Descripcion: "CAP ASSEMBLY, 12 POSN, DUAL ROW, AMPSEAL 16, VO",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/17d0a1ea2ce749a427bf1e22462fdefea6dad2f5cef7562e46b3fdabe099571ee10657f97d1b9ce0ce816851ba933f666faa86256d90d3e6926d486aa6d883a6.png",
          Activo: 1,
        },
        {
          Id: 143,
          NumeroParte: "2035367-1",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0, RDWS",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/24178cdaac591f4ee731555478b677d01dd717e2b2d85a089b561483d6d1f0ae03b0040d19af3cda7b3d70e4df27634b9f193701d8274f834346127eb2eb82a3.png",
          Activo: 1,
        },
        {
          Id: 144,
          NumeroParte: "2035367-2",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0, RDWS",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 145,
          NumeroParte: "2035367-3",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0, RDWS",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 146,
          NumeroParte: "2035367-4",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, SINGLE ROW, AMPSEAL 16, V0, RDWS",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 147,
          NumeroParte: "2320932-1",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, REDUCED DIA SEAL, HI TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 148,
          NumeroParte: "2320932-2",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, REDUCED DIA SEAL, HI TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 149,
          NumeroParte: "2320932-3",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, REDUCED DIA SEAL, HI TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 150,
          NumeroParte: "2320932-4",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, REDUCED DIA SEAL, HI TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 151,
          NumeroParte: "2320920-1",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, STD DIA SEAL, HIGH TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 152,
          NumeroParte: "2320920-2",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, STD DIA SEAL, HIGH TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 153,
          NumeroParte: "2320920-3",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, STD DIA SEAL, HIGH TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 154,
          NumeroParte: "2320920-4",
          Descripcion:
            "PLUG ASSEMBLY, 2 POSITION, STD DIA SEAL, HIGH TEMP, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 155,
          NumeroParte: "776286-1",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/45d1a3f9bd7f5660a027ceb21c00508a8e0a0e4320865bf25dde75783741589688f1346ce1cfda5f886832bcad50edf95f8d4acc43447601fb16f38f8d1fd451.jpg",
          Activo: 1,
        },
        {
          Id: 156,
          NumeroParte: "776286-2",
          Descripcion: "PLUG ASSEMBLY, 8 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/2d0938710734cb774376d2df38b5beea50f617e61fa4cf5ce38bb5fcdc5b6a447bba5a3b1de0e4fb2347d4b0f1e73cdb84a37dc1adf10b54a2dc204dca3621ef.jpg",
          Activo: 1,
        },
        {
          Id: 157,
          NumeroParte: "770680-1",
          Descripcion: "PLUG ASSEMBLY, 23 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/61a40c3ce7751f6b4d794b84e55ff83e6f0a90eaf50e0029e9a8de9e7e51d81334ef6b67b09259cfc61c234a98d45d685b0bf324bd838d97685ba5b0a5fc5ac3.png",
          Activo: 1,
        },
        {
          Id: 158,
          NumeroParte: "770680-2",
          Descripcion: "PLUG ASSEMBLY, 23 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bd1a6c8317ec5456d7a758f85ce4fd283bf0518122526425849f547b10406e03a2d225d81f774b1dd262c8f1e741f066446aa1a62ec94d8f15c733a073e66fa1.png",
          Activo: 1,
        },
        {
          Id: 159,
          NumeroParte: "770680-4",
          Descripcion: "PLUG ASSEMBLY, 23 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/869dc5d6da91e5cd92f317c44ae28ecb028f40fc3bd95f52c973f8084232d2dc963cfadd01233772ecb2ae0092531b31bee0a7d334905959a61072dfc407075d.png",
          Activo: 1,
        },
        {
          Id: 160,
          NumeroParte: "770680-3",
          Descripcion: "PLUG ASSEMBLY, 23 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ac9bbc11cd9076d3c347a131c24df39d1187c43738e059fcef70f041cde1d5a71b3560f9e46cd149ac565069f9b221f352c22db521e9144f88ca7dd4fabcf001.png",
          Activo: 1,
        },
        {
          Id: 161,
          NumeroParte: "770680-5",
          Descripcion: "PLUG ASSEMBLY, 23 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/00f22d3981867262d04ae6cba7f5808de68e9aa7ff8f85b34ca40363ca95417d3394518a40f77c6db30c4b258a517d73bb5eb5b589f0be063bfdbbacffbd38b3.png",
          Activo: 1,
        },
        {
          Id: 162,
          NumeroParte: "776164-1",
          Descripcion: "PLUG ASSEMBLY, 35 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/2dc5e63dc977823bdc71bb296a2b3fd98af0b49d89f71c077e3b5b2923a1702bb2c46ad59a3206706163073f48621d6a4c323356fe361a53c100f0b0d487f0d1.png",
          Activo: 1,
        },
        {
          Id: 163,
          NumeroParte: "776164-2",
          Descripcion: "PLUG ASSEMBLY, 35 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/1540e9bbeaa3dbfada9a97e592cfbb555c8e903036f7b3eebd6b227e79edb7810d45cd628450137f1108b7de0443aa92a9e485f6c60d12dfd1b113b68af684d1.png",
          Activo: 1,
        },
        {
          Id: 164,
          NumeroParte: "776164-4",
          Descripcion: "PLUG ASSEMBLY, 35 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/fa5536f9cc6eed38f120e8f0c163cfa1ae27799e1b391feec56c57fbee3b0d5ab5f5506e48ebedea3497c0a134aec616165716a7d645fa1d48c2e83d7b889c55.png",
          Activo: 1,
        },
        {
          Id: 165,
          NumeroParte: "776164-5",
          Descripcion: "PLUG ASSEMBLY, 35 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c4ac2fceef3c959c8e5f90ff980523a2dde03fb4fbb050733314284ef48d0aa331c8b9b22b101344809534c2ea6941d51ef3c6b8579bcd6d65a896c37c336514.png",
          Activo: 1,
        },
        {
          Id: 166,
          NumeroParte: "776164-6",
          Descripcion: "PLUG ASSEMBLY, 35 POSITION, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/dcde82ad70560632967c570e9650de29851df1700bccfe57a645e1f85831d9efb0ec11f05777c3a39c9b35d2b015e7a181906aca0c325e6aaa871bead9a09a13.png",
          Activo: 1,
        },
        {
          Id: 167,
          NumeroParte: "776273-1",
          Descripcion: "PLUG ASSEMBLY, 14 POSITION, AMPSEAL (NEGRO)",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ff4d972aed301a04d26c825a36d7c7c6c9b55e1314032faef001ac0dfee2e92c48e8dcaf23eba863578f820e3ee1094529dd32e774cee85308e593f158c97f12.png",
          Activo: 1,
        },
        {
          Id: 168,
          NumeroParte: "776273-2",
          Descripcion: "PLUG ASSEMBLY, 14 POSITION, AMPSEAL (BLANCO)",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/260a78a1dcd75b9ef4342155d6b7caf3acce48de4a4fb73df0779e5c50bcd37884b35c39b2b789a05a8032a99e514e8460dfe316774a16c02abce661c4b8aadf.png",
          Activo: 1,
        },
        {
          Id: 169,
          NumeroParte: "776273-4",
          Descripcion: "PLUG ASSEMBLY, 14 POSITION, AMPSEAL (GRIS)",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ff51396c2517405162061e55d37825f27b8684769cefaba85a0c8dd8f9ffc33677744e130438c6f6a804529458e664da0ff1a2a202f78f0336771f7c17c8a60e.png",
          Activo: 1,
        },
        {
          Id: 170,
          NumeroParte: "776273-5",
          Descripcion: "PLUG ASSEMBLY, 14 POSITION, AMPSEAL (AZUL)",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/cc2e56e5d0cda3a16e944049f90e825dcea827aa927f3545ef05cb7d04e9560f8132acd2aa28df2dab8182cfa26732a3983308938154b48af232291a742baaff.png",
          Activo: 1,
        },
        {
          Id: 171,
          NumeroParte: "1-776275-1",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/65fb4371540c89db08eac47cee77b64caf29048098c3616b61cd1c663953014392be31b30c8f04f712f54ba0fa32fd3e949738202bcc04c92eaa4b43c4dcce8d.png",
          Activo: 1,
        },
        {
          Id: 172,
          NumeroParte: "1-776275-2",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 173,
          NumeroParte: "776275-1",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/a4fa8471c3dcb5f334c6dc015545dcfb38a170f73badbd87d5e37e28dbd55bc2459331955f9aff763601f37023ba0e17f5f302418c508d2268cf3dff3ec03303.png",
          Activo: 1,
        },
        {
          Id: 174,
          NumeroParte: "776275-2",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 175,
          NumeroParte: "1-776261-1",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/04c2ec61399f1d76541ed54e91ce47fef0df1102f275f7b4771fa9099e98d7a0be52da492f3ae15bf81947bc139e3b21b2c71e1aac67087a37179cae69ceedf8.png",
          Activo: 1,
        },
        {
          Id: 176,
          NumeroParte: "1-776261-2",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 177,
          NumeroParte: "1-776261-4",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 178,
          NumeroParte: "1-776261-5",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 179,
          NumeroParte: "776261-1",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/dd993dc0ea62e43104de0a4ad275a0707d2769c3d4b9ea791a449419bd717c5b05222886b4cf626e14511ffde2c2bad0e91717ea01cdd30f9689717bb3f82150.png",
          Activo: 1,
        },
        {
          Id: 180,
          NumeroParte: "776261-2",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 181,
          NumeroParte: "776261-4",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 182,
          NumeroParte: "776261-5",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 183,
          NumeroParte: "776200-1",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/96fccec66a86761393cf778805cf43d6c69c3e6d519a48ac2867f93b116e6a363fc92d7763619db9658cea3b48630c4c2a9a832a755cd4ea66a5bc7663dcd155.png",
          Activo: 1,
        },
        {
          Id: 184,
          NumeroParte: "776200-2",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 185,
          NumeroParte: "776200-4",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 186,
          NumeroParte: "776200-5",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 187,
          NumeroParte: "1-776200-1",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/292d07084b086b92a9d9c67cbe988e671601954dba0654b589c05ae83a90a3d2de87ea484f6a0070454c4bb4cd38f7306c490fd24f6f8a206e4f6ff02cd783b8.png",
          Activo: 1,
        },
        {
          Id: 188,
          NumeroParte: "1-776200-2",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 189,
          NumeroParte: "1-776200-4",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 190,
          NumeroParte: "1-776200-5",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 191,
          NumeroParte: "1-776230-1",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 192,
          NumeroParte: "1-776230-2",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 193,
          NumeroParte: "1-776230-4",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 194,
          NumeroParte: "1-776230-5",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 195,
          NumeroParte: "1-776230-6",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 196,
          NumeroParte: "776230-1",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 197,
          NumeroParte: "776230-2",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 198,
          NumeroParte: "776230-4",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 199,
          NumeroParte: "776230-5",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 200,
          NumeroParte: "776276-1",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f911413f14019addac65b9f3a416c4bf00732aff43359e28d504ec840c88b493293172f0b3e0f02d1c2fb62b02f9fc91f6d234ace1c6877fd3747ba3343ec964.jpg",
          Activo: 1,
        },
        {
          Id: 201,
          NumeroParte: "776276-2",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/b367d0369d08247a3ba7626332d97e7b2b4e9711177eb45dea3d5fb99d8ed48c137a27bcd47b8152428d04a36ea34afe42b8e6c33598752cd3e85f151c072244.jpg",
          Activo: 1,
        },
        {
          Id: 202,
          NumeroParte: "1-776276-2",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c93064935ee86879ab5b59fdc459b6c2a58e39aa355812d948f1e7407d96ddcff8077ddc2fddab835a04ea96253ede4fedab54c0b6c84e6f523015045d1ce352.jpg",
          Activo: 1,
        },
        {
          Id: 203,
          NumeroParte: "1-776276-1",
          Descripcion: "ASSEMBLY, HEADER, 8 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/8c854873095ba9df5f069c141f3ace49151b1fdb410bf71f9c73694b32ba1e5014c5f12d34c3d90274e966722823b590ff6f93408db3df1a6ca5ae89777c8564.jpg",
          Activo: 1,
        },
        {
          Id: 204,
          NumeroParte: "776262-1",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/932b127eb9ecb5c880fbb6404630fd56992723ca5fc4347a6f8c77b213828b1b28b7b28398b3d664ee77c49c12ff5743b010a9f3424cb7be2b760a8dca52e5df.jpg",
          Activo: 1,
        },
        {
          Id: 205,
          NumeroParte: "776262-2",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/37504084b653ef22e353414eba132b9c6ea40b43fb234055779b54831dc1cfb9d832979c9d9b5887614c1ef27e45ecf01241798f1383b008b3b360baff393ee8.jpg",
          Activo: 1,
        },
        {
          Id: 206,
          NumeroParte: "776262-4",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/c4d54c42f8d5ffc12be8572c94d4abac3f94c88f3ed2f0766ec279c0911ab953601aab235a28be568b40f8fcd72013730f39fd561fdc4308d6e1d9bcf152283e.jpg",
          Activo: 1,
        },
        {
          Id: 207,
          NumeroParte: "776262-5",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/8c6f70ee349ba5f0cbf9063dfdf19305a41151c2836b705beadc1c8b00a144cb141ab72d0b51071f32a60e03101129bdaee0b97e5402101f9d546558a29fc02d.jpg",
          Activo: 1,
        },
        {
          Id: 208,
          NumeroParte: "1-776262-1",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/af207cbc07459c73b444f8c25e77aa33be98efe6adaeb6fb6504fe7287f05062399fcff207fbd6bb8aa542a10176babef64eba0ae1423df0ef594253ffda16a9.jpg",
          Activo: 1,
        },
        {
          Id: 209,
          NumeroParte: "1-776262-2",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/92aa88d785880a45c727d42074e55c5c8ce282486e79a1b98df546e71533bd2ab7ea38cac6fb5c770c5498116146fe4dce8d95238d6de5b4a0cd04ed4f67442d.jpg",
          Activo: 1,
        },
        {
          Id: 210,
          NumeroParte: "1-776262-4",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f13ad22e3779567ce1c5b490b7c6a0cd9fe2f06dc1e3f05b8e66e804002a8f1a8cfa97f47181da5b89cfbb4d122cb8a9f6cfc5796d1f91e973bca7285d7b1714.jpg",
          Activo: 1,
        },
        {
          Id: 211,
          NumeroParte: "1-776262-5",
          Descripcion: "ASSEMBLY, HEADER, 14 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/bdc26df5dadbd5dd0f751b8eb3f6958a7228df5c0fc6ec5b47f8f30f11ab316f4ff92e247365b9707320843e7a79cbe1d21ef7e372d55864d77d3fa1442469a6.jpg",
          Activo: 1,
        },
        {
          Id: 212,
          NumeroParte: "776228-1",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 213,
          NumeroParte: "776228-2",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 214,
          NumeroParte: "776228-4",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 215,
          NumeroParte: "776228-5",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 216,
          NumeroParte: "1-776228-1",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 217,
          NumeroParte: "1-776228-2",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 218,
          NumeroParte: "1-776228-4",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 219,
          NumeroParte: "1-776228-5",
          Descripcion: "ASSEMBLY, HEADER, 23 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 220,
          NumeroParte: "776231-1",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 221,
          NumeroParte: "776231-2",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 222,
          NumeroParte: "776231-4",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 223,
          NumeroParte: "776231-5",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 224,
          NumeroParte: "1-776231-1",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 225,
          NumeroParte: "1-776231-2",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 226,
          NumeroParte: "1-776231-4",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 227,
          NumeroParte: "1-776231-5",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 228,
          NumeroParte: "1-776231-6",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, VERTICAL, AMPSEAL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 229,
          NumeroParte: "2035153-1",
          Descripcion: "ASSEMBLY, CAP. PAINT/DUST, 54 POSITION, HDR",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/f690f45ebdc4c16814d133d7311c427b99ef88c390f836944e8f033c0e0591645fd715c3cbe08c1d37ca468c42970cae302e8d1d6e8492a07729e01c2f0e8b60.jpg",
          Activo: 1,
        },
        {
          Id: 230,
          NumeroParte: "2138477-1",
          Descripcion: "CAP ASSEMBLY, PAINT (DUST) CAP, 6 POSN, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/6001d0d76d36d8cf2c1eda7a4389109c06788a41560e66b28ba665854c8a527a784eb8b94c43d633cb4d0120eb49386e09bf762ab3acb89b5babef8161de822b.jpg",
          Activo: 1,
        },
        {
          Id: 231,
          NumeroParte: "2098104-1",
          Descripcion: "ASSEMBLY, DUST COVER, 54 WAY PLUG, JD",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e683099a6fdaa7d83b3d76136b6f1eab314ecdd4149857859e583f4ec2c9744c08b8e71a7945aff44b60305c76bbac43f489ad4fa4da73e914ffe95c84869dfa.jpg",
          Activo: 1,
        },
        {
          Id: 232,
          NumeroParte: "2098319-1",
          Descripcion: "PAINT (DUST) PLUG, 6 POSITION, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/7e8164ae7e7385532c02b76149bbb7287dad8033fd69204dbc27f11fc7cb7bb28f9b977ff873ad4385f6651567e670f1ca36e9420b3d383ea2e828c1e25b6776.jpg",
          Activo: 1,
        },
        {
          Id: 233,
          NumeroParte: "1456822-2",
          Descripcion: "PLUG ASSEMBLY, 3 POSITION, SINGLE ROW, AMPSEAL 16, V",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5ec533bd3f4fc34903f3eb463aeab0494052cc4a099397a61ddc06dc3a3d4e7a2e9e34f3a12fc7dcb4c91296e62ac86a8943598f0c0dc78191157212b8c3feee.png",
          Activo: 1,
        },
        {
          Id: 234,
          NumeroParte: "2138475-1",
          Descripcion: "PAINT (DUST) PLUG, 2 POSN, AMPSEAL 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/2b81e9e178cd097d126e1ab5a7efbb13e8d94f47d369ae7b11adb93dc68bb076d1c42f365e8621e9dfc5cc9460b788fd6dfb2e2d26c56aa12d954fbd43170142.png",
          Activo: 1,
        },
        {
          Id: 235,
          NumeroParte: "2098309-3",
          Descripcion: "PAINT (DUST) PLUG, 12 POSITION, AS 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/ae3a3cf66ffc46b1c5ba60198be40790ca28a79d423172f375bdd451e52ca143eb1c952af9501e999bf6353300d2851d5f535850385192304d99ed4b359a340e.png",
          Activo: 1,
        },
        {
          Id: 236,
          NumeroParte: "2098318-3",
          Descripcion: "PAINT (DUST) PLUG, 2 POSITION, AS 16",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/e613762cfe386f3ea4fc32f4c3cc044b6e9d819eb005d26511c315c8da1f2b6b9d78939fec6a2e2d094bded0def71310a9845a0eff71e84152902357f8d80343.png",
          Activo: 1,
        },
        {
          Id: 237,
          NumeroParte: "1326075-1",
          Descripcion: "52 POSN CAP ASSEMBLY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 238,
          NumeroParte: "1326140-1",
          Descripcion: "SHIELD ASSEMBLY, 32 POSITION 0.64mm LAC",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 239,
          NumeroParte: "1557636-1",
          Descripcion: "MQS 2P, CONNECTOR CLIP ASSEMBLY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 240,
          NumeroParte: "1587335-1",
          Descripcion: "BASE ASSEMBLY 40 POSITION",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 241,
          NumeroParte: "2098309-1",
          Descripcion: "PAINT (DUST) PLUG, 12 POSITION, AS 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 242,
          NumeroParte: "2098318-1",
          Descripcion: "PAINT (DUST) PLUG, 2 POSITION, AS 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 243,
          NumeroParte: "2138475-2",
          Descripcion: "PAINT (DUST) PLUG, 2 POSN, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 244,
          NumeroParte: "2138476-3",
          Descripcion: "CAP ASSEMBLY, PAINT (DUST) CAP, 12 POSN, ASMPEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 245,
          NumeroParte: "2203195-1",
          Descripcion: "PAINT (DUST) PLUG, 4 POSITION, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 246,
          NumeroParte: "2203195-3",
          Descripcion: "PAINT (DUST) PLUG, 4 POSITION, AMPSEAL 16",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 247,
          NumeroParte: "776467-1",
          Descripcion: "CPA, NP 776467-1 (COLOR ROJO)",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d353d4c5d204538a19ba3d1c7778119a81b508545ac45039d479ba8fd31d2c8c6a313551c80ec7dc2d0fe07a1f806f79c3c46dca0b1d6379e6c7512355182d91.png",
          Activo: 1,
        },
        {
          Id: 248,
          NumeroParte: "776163-1",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, RIGHT ANGLE, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/630867d56aab62a561900536624d9185f1cfb583e4debb86f4dfb170a5b398dceff8e5e9e6dc317defe5fbeefc592cc49e72e341173f5d6027423c9b67ce22ef.png",
          Activo: 1,
        },
        {
          Id: 249,
          NumeroParte: "776180-1",
          Descripcion: "ASSEMBLY, HEADER, 35 POSITION, RIGHT ANGLE, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5fe1343e31ded03dece424c9f40bc0f9c01f5dc5dd80c92a20054f0747290ba3de6c77b0c408db5da31ab75c1256e71963f32c858bed92ab62fac6d484b7b672.jpg",
          Activo: 1,
        },
        {
          Id: 250,
          NumeroParte: "1732492-1",
          Descripcion: "WIRE HARNESS ASSEMBLY, MONARCH 6 CYL.",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/22db15f20621b86182f20241adb48cfab52df0853732da386d3e87944305a2c47dc076d8b8268ea74ab91d7d2a8d9e617e17fa1ea49fbc1b66b8cd9b34405f2b.jpg",
          Activo: 1,
        },
        {
          Id: 251,
          NumeroParte: "1732492-2",
          Descripcion: "WIRE HARNESS ASSEMBLY, MONARCH 6 CYL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/06b0a0f6db6a32b92c02dd5f8863bfd894a08b84dedb26b078815719e61e0bcdec0f5412e4042cb7592525e8c95f59d6a6d1e2b49141d9187095fafad82d7332.jpg",
          Activo: 1,
        },
        {
          Id: 252,
          NumeroParte: "2138576-2",
          Descripcion: "WIRE HARNESS, JOHN DEERE 6 CYL. S350 FT4",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/53093e58358e339b6121c0647d8565fe154c5129c449fa64a36314859faca415a16b6d473dfbfda4b8ee3ebb99fdcb76d1396684222219022beb253f13e9546c.jpg",
          Activo: 1,
        },
        {
          Id: 253,
          NumeroParte: "1732410-3",
          Descripcion: "WIRE  HARNESS JOHN DEERE 6 CYL, S350",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/281cfd5a66052c174a6258896f922e933bc8bdc4e60d1786b269626233d3924748494b4ad9d8c1d9caf61e084c19d3df96e08235475a13b87611812f690a608b.jpg",
          Activo: 1,
        },
        {
          Id: 254,
          NumeroParte: "1732415-3",
          Descripcion: "WIRE  HARNESS JOHN DEERE 4 CYL. S350",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/099f9a3f1bfbe2bdb102cec8894a235a30b4de343550a5b02fee46a5ac99cfa0b13dd53339e2344e5ca38cb16b483e17bb622c4e0ffe0435b4e9c0951341b246.jpg",
          Activo: 1,
        },
        {
          Id: 255,
          NumeroParte: "1732465-2",
          Descripcion: "WIRE HARNESS, JOHN DEERE S450",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/31a44ecd91548db5a7d422e9fa2e04c3917a0fc9797c47b9749bbb0a4028a3f1561c23b53e20e0a6051f634be95ee5e9bc5249aee9a0a2ba64c891149a13702d.jpg",
          Activo: 1,
        },
        {
          Id: 256,
          NumeroParte: "2315361-1",
          Descripcion: "WIRE HARNESS, 12PODN JOHN DEERE S450",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/2b6884a3b2344e9515c6a151391957238c0887b76633ae6e3d782e342890dd35b9ad5752701c332efe690b0ebc5805d20414a0e879e2d43023ee2815ab9dbd28.jpg",
          Activo: 1,
        },
        {
          Id: 257,
          NumeroParte: "1443955-4",
          Descripcion: "WIRE HARNESS JOHN DEERE 6 CYL. DIESEL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/d0cc636634f4c06bff04976bd7857897fa048c6101a02f06ba86a03c8447111ce3c7f6c7cf8060eaf9035b6891100fa30fefaef0abd682872560fa3c73996407.jpg",
          Activo: 1,
        },
        {
          Id: 258,
          NumeroParte: "1-2333650-6",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 259,
          NumeroParte: "1-2333711-1",
          Descripcion: "WIRE HARNESS ASSEMBLY, MONARCH 6 CYL DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 260,
          NumeroParte: "1-2333711-2",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 261,
          NumeroParte: "1-2333711-3",
          Descripcion: "WIRE HARNESS ASSEMBLY, MONARCH 6 CYL DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 262,
          NumeroParte: "1-2333714-1",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL GRIZZLY ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 263,
          NumeroParte: "1-2333714-2",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL GRIZZL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 264,
          NumeroParte: "1-2333714-3",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 265,
          NumeroParte: "1-2333986-2",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 266,
          NumeroParte: "1-2333986-4",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 267,
          NumeroParte: "2-2333650-4",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 268,
          NumeroParte: "2-2333650-5",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 269,
          NumeroParte: "3-2333650-4",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 270,
          NumeroParte: "4-1899087-4",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 271,
          NumeroParte: "4-2333650-1",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 272,
          NumeroParte: "2333650-8",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 273,
          NumeroParte: "2333707-2",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 274,
          NumeroParte: "2333707-3",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 275,
          NumeroParte: "2333707-4",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 276,
          NumeroParte: "2333707-6",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 277,
          NumeroParte: "2333707-7",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 278,
          NumeroParte: "2333707-8",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 279,
          NumeroParte: "2333712-3",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 280,
          NumeroParte: "2333712-4",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 281,
          NumeroParte: "2333712-5",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 282,
          NumeroParte: "2333712-6",
          Descripcion: "WIRE  HARNESS ASSEMBLY CUMMINS 6CYL ENGINE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 283,
          NumeroParte: "2333713-2",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 284,
          NumeroParte: "2333713-4",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 285,
          NumeroParte: "2333713-5",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 286,
          NumeroParte: "2333713-6",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 287,
          NumeroParte: "2333713-7",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 288,
          NumeroParte: "2333713-8",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 289,
          NumeroParte: "2333715-3",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 290,
          NumeroParte: "2333715-4",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 291,
          NumeroParte: "2333715-5",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 292,
          NumeroParte: "2333986-3",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 293,
          NumeroParte: "2333986-5",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 294,
          NumeroParte: "2333986-7",
          Descripcion: "ASSEMBLY, WIRE HARNESS, MONARCH 6 CYL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 295,
          NumeroParte: "2333986-9",
          Descripcion: "WIRE HARNESS ASSEMBLY CUMMINS 6CYL MONARCH DIESEL",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 296,
          NumeroParte: "776279-1",
          Descripcion: "HEADER ASSEMBLY, 8 POSITION, RIGHT ANGLE, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/7538d3524c9a80797713739951d3911fb6ce13927c01dc0c3dd97d4154d39276058d330e0986efea0304a55561a604db86c7ea370a2d1caaeb4c92d7170d04ab.jpg",
          Activo: 1,
        },
        {
          Id: 297,
          NumeroParte: "776279-6",
          Descripcion: "HEADER ASSEMBLY, 8 POSITION, RIGHT ANGLE, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/53b332a9254963633fc6b11275ddcc4aef514807b2f532ce7325ac4bc2006b9a6dbbe08d626a45d4840ddf57d727686f24c683e4f603ae0af103fc1b0693ebae.jpg",
          Activo: 1,
        },
        {
          Id: 298,
          NumeroParte: "776279-2",
          Descripcion: "HEADER ASSEMBLY, 8 POSITION, RIGHT ANGLE, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/8aed27ffb7eac61469148cdbadf92d7f7345dac398e35bbb03945d5af1c8311e3ae5a9a9c62791fcd7ce1493224d4a4d7a6a792bb8df5c126021832ece07b435.jpg",
          Activo: 1,
        },
        {
          Id: 299,
          NumeroParte: "1-776279-1",
          Descripcion: "HEADER ASSEMBLY, 8 POSITION, RIGHT ANGLE, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/dd60750b0b6fe0a32c2779e1307bb48aff399df46b2f48bc3354db1d40a9be4c992a516d2115bc16f8ad700c836bee28c2605c07bdf752c1b4d51af8cc0e415f.jpg",
          Activo: 1,
        },
        {
          Id: 300,
          NumeroParte: "1-776279-2",
          Descripcion: "HEADER ASSEMBLY, 8 POSITION, RIGHT ANGLE, AMPSEAL",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/5db6938fbfb1dde3b90c44a32745f87887726381415cbbce0558c908469cb64e453e0a2856568a24ce40e1e231211b251a206d595616d06d21049ddde2f68ac8.jpg",
          Activo: 1,
        },
        {
          Id: 301,
          NumeroParte: "1-770669-1",
          Descripcion: "23P AMPSEAL ASSY SNAP-IN GOLD",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 302,
          NumeroParte: "1-770669-2",
          Descripcion: "23P AMPSEAL ASSY SNAP-IN GOLD",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 303,
          NumeroParte: "1-770669-4",
          Descripcion: "23P AMPSEAL ASSY SNAP-IN GOLD",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 304,
          NumeroParte: "1-770669-5",
          Descripcion: "23P AMPSEAL ASSY SNAP-IN GOLD",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 305,
          NumeroParte: "1-776180-1",
          Descripcion: "35POS,PIN DIA 1.3,HDR ASSY,90DEG,COD 1",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 306,
          NumeroParte: "1-776180-2",
          Descripcion: "35POS,AMPSEAL,PIN HSG ASSY,SLD,COD 2",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 307,
          NumeroParte: "1-776180-4",
          Descripcion: "35POS,AMPSEAL,PIN HSG ASSY,SLD,COD 4",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 308,
          NumeroParte: "1-776180-5",
          Descripcion: "35POS,AMPSEAL,PIN HSG ASSY,SLD,COD 5",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 309,
          NumeroParte: "1-776180-6",
          Descripcion: "35POS,AMPSEAL,PIN HSG ASSY,SLD,COD 6",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 310,
          NumeroParte: "1-776266-1",
          Descripcion: "14 POS RIGHT ANGLE HEADER ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 311,
          NumeroParte: "1-776266-2",
          Descripcion: "14 POS RIGHT,ANGLE HEADER ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 312,
          NumeroParte: "1-776266-4",
          Descripcion: "14 POS RIGHT ANGLE HEADER ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 313,
          NumeroParte: "1-776266-5",
          Descripcion: "14POS,PIN DIA 1.3,HDR ASSY,90DEG",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 314,
          NumeroParte: "770669-1",
          Descripcion: "23 POS AMPSEAL ASSY SNAP-IN",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 315,
          NumeroParte: "770669-2",
          Descripcion: "23 POS AMP SEAL HDR ASSY SNAP",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 316,
          NumeroParte: "770669-4",
          Descripcion: "23P AMPSEAL, ASSY SNAP-IN GREY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 317,
          NumeroParte: "770669-5",
          Descripcion: "23P AMPSEAL, ASSY SNAP-IN BLUE",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 318,
          NumeroParte: "776180-1",
          Descripcion: "35 POS AMP SEAL HDR ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 319,
          NumeroParte: "776180-2",
          Descripcion: "35 POS AMP SEAL HDR ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 320,
          NumeroParte: "776180-4",
          Descripcion: "35 POS AMP SEAL HDR ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 321,
          NumeroParte: "776180-5",
          Descripcion: "35 POS AMP SEAL HDR ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 322,
          NumeroParte: "776266-1",
          Descripcion: "14 POS RIGHT ANGLE HEADER ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 323,
          NumeroParte: "776266-2",
          Descripcion: "14 POS RIGHT ANGLE HEADER ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 324,
          NumeroParte: "776266-4",
          Descripcion: "14 POS RIGHT ANGLE HEADER ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 325,
          NumeroParte: "776266-5",
          Descripcion: "14 POS RIGHT ANGLE HEADER ASSY",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 326,
          NumeroParte: "1-776163-1",
          Descripcion: "35 Pos Ampseal HDR Asy BLK",
          ImagenUrl: "NULL",
          Activo: 1,
        },
        {
          Id: 327,
          NumeroParte: "776087-5",
          Descripcion: "23 Pos Ampseal Azul",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/0ce98f8b6429d8f95a1ceaba74660b13314594ee1adb15f206b66e5ec2902a3b085eb6c46be3fe758db9eb7013420dd1dd7178fb2f9c4922aa1f8c99f9edd473.jpg",
          Activo: 1,
        },
        {
          Id: 328,
          NumeroParte: "776267-1",
          Descripcion: "14 POS RT ANG HDR ASSY W/GASKET",
          ImagenUrl:
            "http://mxj21wb400/ICT_CtrlFile/App_File/CASMaterial/da8662c319b20f9e678bdde48dca90789fe1f7c259c8cf45a15b953224e8d08fe1d092d720b13ffb96ee3a8f54565931ba4318d482ecb74180f713a96ef7abb2.jpg",
          Activo: 1,
        },
        {
          Id: 329,
          NumeroParte: "776087-1",
          Descripcion: "23 POS AMPSEAL HDR SNAP IN W/G",
          ImagenUrl: "NULL",
          Activo: 1,
        },
      ],
    };
  },
};
</script>

const provinces = [
    { id: '010100', name: 'Chachapoyas', RegionId: '010000' },
    { id: '010200', name: 'Bagua', RegionId: '010000' },
    { id: '010300', name: 'Bongará', RegionId: '010000' },
    { id: '010400', name: 'Condorcanqui', RegionId: '010000' },
    { id: '010500', name: 'Luya', RegionId: '010000' },
    { id: '010600', name: 'Rodríguez de Mendoza', RegionId: '010000' },
    { id: '010700', name: 'Utcubamba', RegionId: '010000' },
    { id: '020100', name: 'Huaraz', RegionId: '020000' },
    { id: '020200', name: 'Aija', RegionId: '020000' },
    { id: '020300', name: 'Antonio Raymondi', RegionId: '020000' },
    { id: '020400', name: 'Asunción', RegionId: '020000' },
    { id: '020500', name: 'Bolognesi', RegionId: '020000' },
    { id: '020600', name: 'Carhuaz', RegionId: '020000' },
    { id: '020700', name: 'Carlos Fermín Fitzcarrald', RegionId: '020000' },
    { id: '020800', name: 'Casma', RegionId: '020000' },
    { id: '020900', name: 'Corongo', RegionId: '020000' },
    { id: '021000', name: 'Huari', RegionId: '020000' },
    { id: '021100', name: 'Huarmey', RegionId: '020000' },
    { id: '021200', name: 'Huaylas', RegionId: '020000' },
    { id: '021300', name: 'Mariscal Luzuriaga', RegionId: '020000' },
    { id: '021400', name: 'Ocros', RegionId: '020000' },
    { id: '021500', name: 'Pallasca', RegionId: '020000' },
    { id: '021600', name: 'Pomabamba', RegionId: '020000' },
    { id: '021700', name: 'Recuay', RegionId: '020000' },
    { id: '021800', name: 'Santa', RegionId: '020000' },
    { id: '021900', name: 'Sihuas', RegionId: '020000' },
    { id: '022000', name: 'Yungay', RegionId: '020000' },
    { id: '030100', name: 'Abancay', RegionId: '030000' },
    { id: '030200', name: 'Andahuaylas', RegionId: '030000' },
    { id: '030300', name: 'Antabamba', RegionId: '030000' },
    { id: '030400', name: 'Aymaraes', RegionId: '030000' },
    { id: '030500', name: 'Cotabambas', RegionId: '030000' },
    { id: '030600', name: 'Chincheros', RegionId: '030000' },
    { id: '030700', name: 'Grau', RegionId: '030000' },
    { id: '040100', name: 'Arequipa', RegionId: '040000' },
    { id: '040200', name: 'Camaná', RegionId: '040000' },
    { id: '040300', name: 'Caravelí', RegionId: '040000' },
    { id: '040400', name: 'Castilla', RegionId: '040000' },
    { id: '040500', name: 'Caylloma', RegionId: '040000' },
    { id: '040600', name: 'Condesuyos', RegionId: '040000' },
    { id: '040700', name: 'Islay', RegionId: '040000' },
    { id: '040800', name: 'La Uniòn', RegionId: '040000' },
    { id: '050100', name: 'Huamanga', RegionId: '050000' },
    { id: '050200', name: 'Cangallo', RegionId: '050000' },
    { id: '050300', name: 'Huanca Sancos', RegionId: '050000' },
    { id: '050400', name: 'Huanta', RegionId: '050000' },
    { id: '050500', name: 'La Mar', RegionId: '050000' },
    { id: '050600', name: 'Lucanas', RegionId: '050000' },
    { id: '050700', name: 'Parinacochas', RegionId: '050000' },
    { id: '050800', name: 'Pàucar del Sara Sara', RegionId: '050000' },
    { id: '050900', name: 'Sucre', RegionId: '050000' },
    { id: '051000', name: 'Víctor Fajardo', RegionId: '050000' },
    { id: '051100', name: 'Vilcas Huamán', RegionId: '050000' },
    { id: '060100', name: 'Cajamarca', RegionId: '060000' },
    { id: '060200', name: 'Cajabamba', RegionId: '060000' },
    { id: '060300', name: 'Celendín', RegionId: '060000' },
    { id: '060400', name: 'Chota', RegionId: '060000' },
    { id: '060500', name: 'Contumazá', RegionId: '060000' },
    { id: '060600', name: 'Cutervo', RegionId: '060000' },
    { id: '060700', name: 'Hualgayoc', RegionId: '060000' },
    { id: '060800', name: 'Jaén', RegionId: '060000' },
    { id: '060900', name: 'San Ignacio', RegionId: '060000' },
    { id: '061000', name: 'San Marcos', RegionId: '060000' },
    { id: '061100', name: 'San Miguel', RegionId: '060000' },
    { id: '061200', name: 'San Pablo', RegionId: '060000' },
    { id: '061300', name: 'Santa Cruz', RegionId: '060000' },
    { id: '070100', name: 'Prov. Const. del Callao', RegionId: '070000' },
    { id: '080100', name: 'Cusco', RegionId: '080000' },
    { id: '080200', name: 'Acomayo', RegionId: '080000' },
    { id: '080300', name: 'Anta', RegionId: '080000' },
    { id: '080400', name: 'Calca', RegionId: '080000' },
    { id: '080500', name: 'Canas', RegionId: '080000' },
    { id: '080600', name: 'Canchis', RegionId: '080000' },
    { id: '080700', name: 'Chumbivilcas', RegionId: '080000' },
    { id: '080800', name: 'Espinar', RegionId: '080000' },
    { id: '080900', name: 'La Convención', RegionId: '080000' },
    { id: '081000', name: 'Paruro', RegionId: '080000' },
    { id: '081100', name: 'Paucartambo', RegionId: '080000' },
    { id: '081200', name: 'Quispicanchi', RegionId: '080000' },
    { id: '081300', name: 'Urubamba', RegionId: '080000' },
    { id: '090100', name: 'Huancavelica', RegionId: '090000' },
    { id: '090200', name: 'Acobamba', RegionId: '090000' },
    { id: '090300', name: 'Angaraes', RegionId: '090000' },
    { id: '090400', name: 'Castrovirreyna', RegionId: '090000' },
    { id: '090500', name: 'Churcampa', RegionId: '090000' },
    { id: '090600', name: 'Huaytará', RegionId: '090000' },
    { id: '090700', name: 'Tayacaja', RegionId: '090000' },
    { id: '100100', name: 'Huánuco', RegionId: '100000' },
    { id: '100200', name: 'Ambo', RegionId: '100000' },
    { id: '100300', name: 'Dos de Mayo', RegionId: '100000' },
    { id: '100400', name: 'Huacaybamba', RegionId: '100000' },
    { id: '100500', name: 'Huamalíes', RegionId: '100000' },
    { id: '100600', name: 'Leoncio Prado', RegionId: '100000' },
    { id: '100700', name: 'Marañón', RegionId: '100000' },
    { id: '100800', name: 'Pachitea', RegionId: '100000' },
    { id: '100900', name: 'Puerto Inca', RegionId: '100000' },
    { id: '101000', name: 'Lauricocha ', RegionId: '100000' },
    { id: '101100', name: 'Yarowilca ', RegionId: '100000' },
    { id: '110100', name: 'Ica ', RegionId: '110000' },
    { id: '110200', name: 'Chincha ', RegionId: '110000' },
    { id: '110300', name: 'Nasca ', RegionId: '110000' },
    { id: '110400', name: 'Palpa ', RegionId: '110000' },
    { id: '110500', name: 'Pisco ', RegionId: '110000' },
    { id: '120100', name: 'Huancayo ', RegionId: '120000' },
    { id: '120200', name: 'Concepción ', RegionId: '120000' },
    { id: '120300', name: 'Chanchamayo ', RegionId: '120000' },
    { id: '120400', name: 'Jauja ', RegionId: '120000' },
    { id: '120500', name: 'Junín ', RegionId: '120000' },
    { id: '120600', name: 'Satipo ', RegionId: '120000' },
    { id: '120700', name: 'Tarma ', RegionId: '120000' },
    { id: '120800', name: 'Yauli ', RegionId: '120000' },
    { id: '120900', name: 'Chupaca ', RegionId: '120000' },
    { id: '130100', name: 'Trujillo ', RegionId: '130000' },
    { id: '130200', name: 'Ascope ', RegionId: '130000' },
    { id: '130300', name: 'Bolívar ', RegionId: '130000' },
    { id: '130400', name: 'Chepén ', RegionId: '130000' },
    { id: '130500', name: 'Julcán ', RegionId: '130000' },
    { id: '130600', name: 'Otuzco ', RegionId: '130000' },
    { id: '130700', name: 'Pacasmayo ', RegionId: '130000' },
    { id: '130800', name: 'Pataz ', RegionId: '130000' },
    { id: '130900', name: 'Sánchez Carrión ', RegionId: '130000' },
    { id: '131000', name: 'Santiago de Chuco ', RegionId: '130000' },
    { id: '131100', name: 'Gran Chimú ', RegionId: '130000' },
    { id: '131200', name: 'Virú ', RegionId: '130000' },
    { id: '140100', name: 'Chiclayo ', RegionId: '140000' },
    { id: '140200', name: 'Ferreñafe ', RegionId: '140000' },
    { id: '140300', name: 'Lambayeque ', RegionId: '140000' },
    { id: '150100', name: 'Lima ', RegionId: '150000' },
    { id: '150200', name: 'Barranca ', RegionId: '150000' },
    { id: '150300', name: 'Cajatambo ', RegionId: '150000' },
    { id: '150400', name: 'Canta ', RegionId: '150000' },
    { id: '150500', name: 'Cañete ', RegionId: '150000' },
    { id: '150600', name: 'Huaral ', RegionId: '150000' },
    { id: '150700', name: 'Huarochirí ', RegionId: '150000' },
    { id: '150800', name: 'Huaura ', RegionId: '150000' },
    { id: '150900', name: 'Oyón ', RegionId: '150000' },
    { id: '151000', name: 'Yauyos ', RegionId: '150000' },
    { id: '160100', name: 'Maynas ', RegionId: '160000' },
    { id: '160200', name: 'Alto Amazonas ', RegionId: '160000' },
    { id: '160300', name: 'Loreto ', RegionId: '160000' },
    { id: '160400', name: 'Mariscal Ramón Castilla ', RegionId: '160000' },
    { id: '160500', name: 'Requena ', RegionId: '160000' },
    { id: '160600', name: 'Ucayali ', RegionId: '160000' },
    { id: '160700', name: 'Datem del Marañón ', RegionId: '160000' },
    { id: '160800', name: 'Putumayo', RegionId: '160000' },
    { id: '170100', name: 'Tambopata ', RegionId: '170000' },
    { id: '170200', name: 'Manu ', RegionId: '170000' },
    { id: '170300', name: 'Tahuamanu ', RegionId: '170000' },
    { id: '180100', name: 'Mariscal Nieto ', RegionId: '180000' },
    { id: '180200', name: 'General Sánchez Cerro ', RegionId: '180000' },
    { id: '180300', name: 'Ilo ', RegionId: '180000' },
    { id: '190100', name: 'Pasco ', RegionId: '190000' },
    { id: '190200', name: 'Daniel Alcides Carrión ', RegionId: '190000' },
    { id: '190300', name: 'Oxapampa ', RegionId: '190000' },
    { id: '200100', name: 'Piura ', RegionId: '200000' },
    { id: '200200', name: 'Ayabaca ', RegionId: '200000' },
    { id: '200300', name: 'Huancabamba ', RegionId: '200000' },
    { id: '200400', name: 'Morropón ', RegionId: '200000' },
    { id: '200500', name: 'Paita ', RegionId: '200000' },
    { id: '200600', name: 'Sullana ', RegionId: '200000' },
    { id: '200700', name: 'Talara ', RegionId: '200000' },
    { id: '200800', name: 'Sechura ', RegionId: '200000' },
    { id: '210100', name: 'Puno ', RegionId: '210000' },
    { id: '210200', name: 'Azángaro ', RegionId: '210000' },
    { id: '210300', name: 'Carabaya ', RegionId: '210000' },
    { id: '210400', name: 'Chucuito ', RegionId: '210000' },
    { id: '210500', name: 'El Collao ', RegionId: '210000' },
    { id: '210600', name: 'Huancané ', RegionId: '210000' },
    { id: '210700', name: 'Lampa ', RegionId: '210000' },
    { id: '210800', name: 'Melgar ', RegionId: '210000' },
    { id: '210900', name: 'Moho ', RegionId: '210000' },
    { id: '211000', name: 'San Antonio de Putina ', RegionId: '210000' },
    { id: '211100', name: 'San Román ', RegionId: '210000' },
    { id: '211200', name: 'Sandia ', RegionId: '210000' },
    { id: '211300', name: 'Yunguyo ', RegionId: '210000' },
    { id: '220100', name: 'Moyobamba ', RegionId: '220000' },
    { id: '220200', name: 'Bellavista ', RegionId: '220000' },
    { id: '220300', name: 'El Dorado ', RegionId: '220000' },
    { id: '220400', name: 'Huallaga ', RegionId: '220000' },
    { id: '220500', name: 'Lamas ', RegionId: '220000' },
    { id: '220600', name: 'Mariscal Cáceres ', RegionId: '220000' },
    { id: '220700', name: 'Picota ', RegionId: '220000' },
    { id: '220800', name: 'Rioja ', RegionId: '220000' },
    { id: '220900', name: 'San Martín ', RegionId: '220000' },
    { id: '221000', name: 'Tocache ', RegionId: '220000' },
    { id: '230100', name: 'Tacna ', RegionId: '230000' },
    { id: '230200', name: 'Candarave ', RegionId: '230000' },
    { id: '230300', name: 'Jorge Basadre ', RegionId: '230000' },
    { id: '230400', name: 'Tarata ', RegionId: '230000' },
    { id: '240100', name: 'Tumbes ', RegionId: '240000' },
    { id: '240200', name: 'Contralmirante Villar ', RegionId: '240000' },
    { id: '240300', name: 'Zarumilla ', RegionId: '240000' },
    { id: '250100', name: 'Coronel Portillo ', RegionId: '250000' },
    { id: '250200', name: 'Atalaya ', RegionId: '250000' },
    { id: '250300', name: 'Padre Abad ', RegionId: '250000' },
    { id: '250400', name: 'Purús', RegionId: '250000' }
]

module.exports = provinces
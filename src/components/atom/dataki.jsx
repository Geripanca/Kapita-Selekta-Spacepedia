import React, { useState } from "react";
import Flush from "./accordianflush";

const Dataki = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const flushData = [
    {
      judul: "Kompetensi Dasar",
      desc: (
        <div className="text-justify">
          <ul>
            <li>KD-1.1: Siswa dapat mengidentifikasi nama dan ciri-ciri umum benda luar angkasa seperti planet, bintang, dan satelit alam.</li>
            <li>KD-1.2: Siswa dapat menyusun urutan planet-planet dalam tata surya.</li>
          </ul>
        </div>
      ),
    },
    {
      judul: "Apa Itu Luar Angkasa",
      desc: (
        <p className="text-justify">
          Luar angkasa merujuk pada ruang di luar atmosfer Bumi. Ini adalah wilayah di mana tidak ada udara atau medium lain yang dapat menghambat pergerakan benda-benda seperti planet, bintang, asteroid, dan lainnya. Luar angkasa dimulai
          di luar lapisan atmosfer Bumi dan meliputi berbagai objek astronomi, termasuk bintang-bintang, planet, galaksi, nebula, dan lainnya.
        </p>
      ),
    },
    {
      judul: "Mengapa Pembelajaran Luar Angkasa Ini Penting?",
      desc: (
        <ul className="text-justify">
          <li>1. Mempelajari luar angkasa membantu kita memahami asal usul alam semesta, bagaimana galaksi, bintang, dan planet terbentuk, serta bagaimana mereka berevolusi seiring waktu.</li>
          <li>2. Penelitian luar angkasa telah mendorong kemajuan teknologi. </li>
          <li>3. Studi tentang luar angkasa juga dapat memberikan wawasan tentang kondisi dan perkembangan Bumi.</li>
          <li>4. Ilmu luar angkasa memiliki keajaiban dan misteri yang dapat menginspirasi generasi baru ilmuwan, peneliti, dan pengusaha.</li>
          <li>5. Mempelajari luar angkasa dapat membantu dalam pencarian tanda-tanda kehidupan di luar Bumi.</li>
        </ul>
      ),
    },
    {
      judul: "Apa itu sistem Tata Surya?",
      desc: (
        <div>
          <img src="../public/ilustarasi-tatasurya.jpg" alt="ilustrasi tata surya" className="w-2/4 mx-auto" />
          <div class="bg-black text-sm text-center py-2">
            <p>Image source : Wikipedia</p>
          </div>
          <div className=" text-justify">
            <p>
              Tata Surya adalah kumpulan benda langit yang terdiri atas sebuah bintang yang disebut Matahari dan semua objek yang terikat oleh gaya gravitasinya. Objek-objek tersebut termasuk delapan buah planet yang sudah diketahui dengan
              orbit berbentuk elips, lima planet kerdil/katai, 290 satelit alami yang telah diidentifikasi, dan jutaan benda langit (meteor, asteroid, komet) lainnya.
            </p>
            <p>
              Tata Surya terbagi menjadi Matahari, empat planet bagian dalam, sabuk asteroid, empat planet bagian luar, dan di bagian terluar adalah Sabuk Kuiper dan piringan tersebar. Awan Oort diperkirakan terletak di daerah terjauh yang
              berjarak sekitar seribu kali di luar bagian yang terluar.
            </p>
            <p>
              Berdasarkan jaraknya dari Matahari, kedelapan planet Tata Surya ialah Merkurius (57,9 juta km), Venus (108 juta km), Bumi (150 juta km), Mars (228 juta km), Jupiter (779 juta km), Saturnus (1.430 juta km), Uranus (2.880 juta
              km), dan Neptunus (4.500 juta km). Keempat planet terdalam, yaitu Merkurius, Venus, Bumi, dan Mars adalah planet kebumian yang terdiri atas batuan dan logam. Sementara itu, keempat planet terluar adalah planet raksasa yang
              jauh lebih besar dari planet kebumian. Dua planet terbesar, yaitu Jupiter dan Saturnus adalah planet raksasa gas yang sebagian bersar terdiri atas hidrogen dan helium. Dua planet lainnya, Uranus dan Neptunus, adalah planet
              raksasa es yang terdiri atas senyawa dengan titik leleh lebih tinggi dari hidrogen dan helium, disebut senyawa volatil seperti air, amonia, dan metana. Sejak pertengahan 2008, ada lima objek angkasa yang diklasifikasikan
              sebagai planet katai. Orbit planet-planet katai, kecuali Ceres, berada lebih jauh dari Neptunus. Kelima planet katai tersebut ialah Ceres (415 juta km di sabuk asteroid; dulunya diklasifikasikan sebagai planet kelima), Pluto
              (5.906 juta km.; dulunya diklasifikasikan sebagai planet kesembilan), Haumea (6.450 juta km), Makemake (6.850 juta km), dan Eris (10.100 juta km). Enam dari kedelapan planet dan tiga dari kelima planet katai itu dikelilingi
              oleh satelit alami. Masing-masing planet bagian luar dikelilingi oleh cincin planet yang terdiri dari debu dan partikel lain.
            </p>
          </div>
        </div>
      ),
    },
    {
      judul: "Matahari",
      desc: (
        <div>
          <img src="../public/ilustrasi-matahari.jpg" alt="gambar matahari" className="w-1/4 mx-auto" />
          <div class="bg-black text-sm text-center py-2">
            <p>Image source : Wikipedia</p>
          </div>
          <div className="text-justify">
            <p>
              Matahari atau Surya adalah bintang di pusat tata surya. Bentuknya nyaris bulat dan terdiri dari plasma panas bercampur medan magnet.Diameternya sekitar 1.392.684 km, kira-kira 109 kali diameter Bumi, dan massanya (sekitar
              2×1030 kilogram, 330.000 kali massa Bumi) mewakili kurang lebih 99,86 % massa total tata surya. Matahari merupakan benda langit terbesar di galaksi Bima Sakti yang besarnya bahkan 10 kali planet terbesar tata surya, Jupiter.
            </p>
            <p>
              Secara kimiawi, sekitar tiga perempat massa matahari terdiri dari hidrogen, sedangkan sisanya didominasi helium. Sisa massa tersebut (1,69%, setara dengan 5.629 kali massa Bumi) terdiri dari elemen-elemen berat seperti
              oksigen, karbon, neon, dan besi. Matahari terbentuk sekitar 4,6 miliar tahun yang lalu akibat peluruhan gravitasi suatu wilayah di dalam sebuah awan molekul besar.
            </p>
          </div>
        </div>
      ),
    },
    {
      judul: "Planet",
      desc: (
        <div>
          <img src="../public/ilustrasi-planet.png" alt="gambar planet" className="w-1/4 mx-auto" />
          <div class="bg-black text-sm text-center py-2">
            <p>Image source : Wikipedia</p>
          </div>
          <div className="text-justify">
            <p>
              Kata 'planet' sudah lama ada dan memiliki hubungan sejarah, sains, mitologi, dan agama. Oleh peradaban kuno, planet dipandang sebagai sesuatu yang abadi atau perwakilan dewa. Seiring kemajuan ilmu pengetahuan, pandangan
              manusia terhadap planet berubah. Pada tahun 2006, Persatuan Astronomi Internasional (IAU) mengesahkan sebuah resolusi resmi yang mendefinisikan planet di Tata Surya. Definisi ini dipuji namun juga dikritik dan masih
              diperdebatkan oleh sejumlah ilmuwan karena tidak mencakup benda-benda bermassa planet yang ditentukan oleh tempat atau benda orbitnya. Meski delapan benda planet yang ditemukan sebelum 1950 masih dianggap "planet" sesuai
              definisi modern, sejumlah benda angkasa seperti Ceres, Pallas, Juno, Vesta (masing-masing objek di sabuk asteroid Matahari), dan Pluto (objek trans-Neptunus yang pertama ditemukan) yang dulunya dianggap planet oleh komunitas
              ilmuwan sudah tidak dipermasalahkan lagi.
            </p>
            <p>Planet Utama Bedasarkan Urutan : </p>
            <ul>
              <li>1. Merkurius</li>
              <li>2. Venus</li>
              <li>3. Bumi</li>
              <li>4. Mars</li>
              <li>5. Jupiter</li>
              <li>6. Sartunus</li>
              <li>7. Uranus</li>
              <li>8. Neptunus</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      judul: "Asteroid",
      desc: (
        <div>
          <img src="../public/ilustrasi-asteroid.jpg" alt="gambar asteroid" className="w-1/3 mx-auto" />
          <div class="bg-black text-sm text-center py-2">
            <p>Image source : Wikipedia</p>
          </div>
          <div className="text-justify">
            <p>
              Asteroid, disebut juga planet minor atau planetoid, adalah benda berukuran lebih kecil daripada planet, tetapi lebih besar daripada meteoroid, umumnya terdapat di bagian dalam Tata Surya (lebih dalam dari orbit planet
              Neptunus). Asteroid berbeda dengan komet dari penampakan visualnya. Komet menampakkan koma ("ekor") sementara asteroid tidak. Istilah ini secara historis ditujukan untuk semua objek astronomis yang mengelilingi matahari dan
              setelah diobservasi tidak memiliki karakteristik komet aktif.
            </p>
            <p>
              Asteroid yang pertama kali ditemukan adalah Ceres pada tahun 1801 oleh Giuseppe Piazzi dan pada awalnya dipertimbangkan sebagai planet baru.Penemuan ini diikuti dengan penemuan benda-benda lainnya yang serupa, yang dengan
              peralatan saat itu, terlihat sebagai titik-titik cahaya, seperti bintang, menunjukkan cakram planet dalam bentuk kecil atau tidak ada sama sekali, meskipun secara mudah dapat dibedakan dari bintang karena gerakan mereka yang
              terlihat.
            </p>
          </div>
        </div>
      ),
    },
    {
      judul: "Satelit",
      desc: (
        <div className="text-justify">
          <p>Satelit adalah benda yang mengorbit benda lain dengan periode revolusi dan rotasi tertentu. Ada dua jenis satelit yakni satelit alami dan satelit buatan.</p>
        </div>
      ),
    },
    {
      judul: "Satelit Alami",
      desc: (
        <div>
          <img src="../public/ilustrasi-bulan.jpg" alt="gambar bulan" className="w-1/3 mx-auto" />
          <div class="bg-black text-sm text-center py-2">
            <p>Image source : Wikipedia</p>
          </div>
          <div className="text-justify">
            <p>
              Satelit alami adalah objek langit yang mengorbit suatu planet atau benda angkasa lainnya dan tidak dibuat oleh manusia. Bulan adalah contoh utama dari satelit alami di Tata Surya kita. Bulan mengorbit Bumi dan merupakan
              satelit alami dari planet ini.
            </p>
          </div>

          <p></p>
        </div>
      ),
    },
    {
      judul: "Satelit Buatan",
      desc: (
        <div className="mb-10">
          <img src="../public/ilustrasi-satelitbuatan.jpg" alt="satelit buatan" className="w-1/4 mx-auto" />
          <div class="bg-black text-sm text-center py-2">
            <p>Image source : Wikipedia</p>
          </div>
          <div className="text-justify">
            <p>
              Satelit buatan adalah objek buatan manusia yang ditempatkan di orbit bumi atau benda langit lainnya untuk tujuan tertentu. Satelit ini dikirimkan ke luar angkasa menggunakan roket dan dirancang untuk menjalankan berbagai tugas
              dan fungsi, termasuk komunikasi, pemetaan bumi, observasi cuaca, penelitian ilmiah, dan navigasi. Satelit buatan telah menjadi bagian integral dari kehidupan sehari-hari kita, mendukung berbagai aspek termasuk komunikasi
              global, pemantauan lingkungan, dan penelitian ilmiah di luar angkasa.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      {flushData.map((data, index) => (
        <Flush key={index} judul={data.judul} desc={data.desc} />
      ))}
    </>
  );
};
export default Dataki;

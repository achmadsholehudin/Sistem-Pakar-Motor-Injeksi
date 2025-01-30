const knowledgeBase = {
    rules: [
        { id: 'R1', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'ya', getaran_abnormal: 'ya', asap_knalpot: 'ya', warna_asap: 'ya', mati_mendadak: 'ya', masalah_listrik: 'ya', masalah_pendingin: 'ya' }, diagnosis: 'Masalah parah pada sistem injeksi, sistem pengapian, mekanik, kelistrikan, dan pendingin.', solution: 'Segera lakukan pengecekan menyeluruh pada sistem injeksi, pengapian, kelistrikan, dan komponen mesin serta sistem pendingin.' },
        { id: 'R2', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Motor dalam kondisi normal.', solution: 'Tidak ada masalah terdeteksi, motor siap digunakan.' },
        { id: 'R3', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem injeksi bahan bakar.', solution: 'Periksa sistem injeksi dan sensor terkait untuk mencari kemungkinan gangguan.' },
        { id: 'R4', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem bahan bakar atau pompa.', solution: 'Periksa pompa bahan bakar, filter, dan sistem penyemprotan bahan bakar.' },
        { id: 'R5', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem kelistrikan atau pompa bahan bakar.', solution: 'Periksa sistem kelistrikan dan sistem pompa bahan bakar.' },
        { id: 'R6', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sensor atau indikator injeksi.', solution: 'Periksa sistem injeksi bahan bakar dan sensor terkait.' },
        { id: 'R7', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'ya', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem kelistrikan motor.', solution: 'Periksa kabel, aki, dan sensor kelistrikan.' },
        { id: 'R8', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem bahan bakar atau filter udara motor.', solution: 'Periksa dan ganti filter udara serta cek aliran bahan bakar.' },
        { id: 'R9', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Kemungkinan masalah pada sistem pembakaran atau injeksi bahan bakar.', solution: 'Periksa dan bersihkan sistem injeksi serta cek kompresi mesin.' },
        { id: 'R10', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Indikator injeksi menyala, tetapi performa motor menurun. Masalah pada komponen penyemprotan bahan bakar.', solution: 'Periksa injektor bahan bakar dan pastikan sistem penyemprotan bekerja baik.' },
        { id: 'R11', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Indikator injeksi menyala dan konsumsi bahan bakar boros.', solution: 'Periksa sistem injeksi dan filter udara.' },
        { id: 'R12', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada komponen mesin dan sistem pembakaran.', solution: 'Periksa komponen mesin dan pastikan tidak ada kerusakan pada kompresi dan klep.' },
        { id: 'R13', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Getaran abnormal kemungkinan berasal dari sistem penggerak atau roda.', solution: 'Periksa bagian penggerak atau sistem roda untuk kerusakan atau keausan.' },
        { id: 'R14', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Indikator injeksi menyala, tetapi motor bekerja normal.', solution: 'Periksa sensor injeksi dan pastikan tidak ada kesalahan sistem.' },
        { id: 'R15', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem bahan bakar dan filter udara.', solution: 'Periksa sistem bahan bakar, filter udara dan pompa bahan bakar.' },
        { id: 'R16', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Bunyi aneh dan getaran abnormal berasal dari sistem mekanis atau penggerak.', solution: 'Periksa bagian mesin atau penggerak seperti kopling atau gigi.' },
        { id: 'R17', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada akselerasi motor terkait sistem bahan bakar atau pengapian.', solution: 'Periksa sistem injeksi atau sistem pengapian.' },
        { id: 'R18', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada injeksi bahan bakar dan sistem pengapian.', solution: 'Periksa injektor bahan bakar dan busi serta komponen pengapian.' },
        { id: 'R19', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Indikator injeksi menyala, motor boros bahan bakar.', solution: 'Periksa sistem injeksi bahan bakar dan komponen terkait.' },
        { id: 'R20', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada komponen mesin, filter, dan sistem bahan bakar.', solution: 'Periksa komponen mesin dan filter udara untuk pembersihan.' },
        { id: 'R21', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Bunyi aneh pada mesin, mungkin dari sistem penggerak atau timing.', solution: 'Periksa sistem penggerak dan komponen timing.' },
        { id: 'R22', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Getaran abnormal akibat masalah pada komponen penggerak atau sistem transmisi.', solution: 'Periksa transmisi dan komponen penggerak motor.' },
        { id: 'R23', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Indikator injeksi menyala, tetapi motor berfungsi normal.', solution: 'Periksa sensor atau sistem injeksi untuk memastikan tidak ada kesalahan.' },
        { id: 'R24', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'ya', getaran_abnormal: 'ya', asap_knalpot: 'ya', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem bahan bakar dan sistem pengapian motor.', solution: 'Periksa dan ganti komponen bahan bakar, busi, dan sistem pengapian.' },
        { id: 'R25', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Akselerasi lambat dan boros bahan bakar, kemungkinan masalah pada sistem injeksi atau pembakaran.', solution: 'Periksa sistem injeksi dan kompresi mesin.' },
        { id: 'R26', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'ya' }, diagnosis: 'Indikator injeksi menyala, tetapi tidak ada masalah besar pada motor, masalah pada sistem pendingin.', solution: 'Periksa sistem pendingin motor, termasuk radiator dan pompa air.' },
        { id: 'R27', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Bunyi aneh pada mesin dan masalah dalam pengapian atau kompresi.', solution: 'Periksa sistem pengapian dan kompresi mesin.' },
        { id: 'R28', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada akselerasi dan boros bahan bakar, kemungkinan sistem injeksi bermasalah.', solution: 'Periksa dan bersihkan sistem injeksi bahan bakar.' },
        { id: 'R29', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Getaran abnormal pada mesin, masalah pada sistem penggerak atau roda.', solution: 'Periksa bagian penggerak dan roda motor.' },
        { id: 'R30', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem bahan bakar dan bunyi aneh dari komponen mesin.', solution: 'Periksa sistem bahan bakar dan komponen mesin yang berpotensi mengalami kerusakan.' },
        { id: 'R31', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem pengapian atau pembakaran motor.', solution: 'Periksa sistem pengapian dan pastikan busi berfungsi baik.' },
        { id: 'R32', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'ya', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem kelistrikan motor, kemungkinan kabel atau aki.', solution: 'Periksa kabel dan pastikan aki dalam kondisi baik.' },
        { id: 'R33', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada filter udara atau pompa bahan bakar motor.', solution: 'Periksa dan ganti filter udara serta periksa pompa bahan bakar.' },
        { id: 'R34', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'ya', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada kelistrikan motor yang menyebabkan mati mendadak.', solution: 'Periksa sistem kelistrikan motor untuk mendeteksi kerusakan.' },
        { id: 'R35', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Bunyi aneh berasal dari sistem penggerak atau komponen mesin.', solution: 'Periksa sistem penggerak dan komponen mesin untuk kerusakan.' },
        { id: 'R36', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'ya', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah kelistrikan atau kabel motor.', solution: 'Periksa kabel dan perbaiki jika diperlukan.' },
        { id: 'R37', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada akselerasi motor yang kemungkinan disebabkan oleh sistem pengapian.', solution: 'Periksa busi dan sistem pengapian untuk masalah.' },
        { id: 'R38', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Bunyi aneh pada motor mungkin berasal dari masalah mesin atau filter udara.', solution: 'Periksa filter udara dan pastikan mesin berjalan dengan lancar.' },
        { id: 'R39', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Getaran abnormal kemungkinan berasal dari sistem penggerak atau roda motor.', solution: 'Periksa sistem penggerak dan roda motor untuk kerusakan.' },
        { id: 'R40', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'ya', getaran_abnormal: 'ya', asap_knalpot: 'ya', warna_asap: 'ya', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah besar pada sistem bahan bakar, pengapian, dan komponen mesin.', solution: 'Segera lakukan pengecekan menyeluruh pada komponen-komponen motor.' },
        { id: 'R41', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'ya', masalah_listrik: 'ya', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem kelistrikan motor.', solution: 'Periksa kabel, aki, dan sensor kelistrikan.' },
        { id: 'R42', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'ya', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada akselerasi dan boros bahan bakar, kemungkinan sistem injeksi bermasalah.', solution: 'Periksa sistem injeksi bahan bakar dan komponen terkait.' },
        { id: 'R43', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'ya', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Getaran abnormal pada mesin yang mungkin disebabkan oleh kerusakan pada komponen penggerak.', solution: 'Periksa bagian penggerak dan komponen mesin untuk kerusakan.' },
        { id: 'R44', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Bunyi aneh pada mesin, kemungkinan berasal dari komponen mesin atau sistem pengapian.', solution: 'Periksa dan pastikan komponen mesin serta pengapian berfungsi dengan baik.' },
        { id: 'R45', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'ya', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada kelistrikan motor, kemungkinan sensor atau kabel rusak.', solution: 'Periksa kabel kelistrikan dan pastikan tidak ada kerusakan pada sensor atau kabel.' },
        { id: 'R46', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada akselerasi motor yang mungkin terkait dengan pengapian atau injeksi bahan bakar.', solution: 'Periksa sistem pengapian dan injeksi untuk memastikan tidak ada masalah.' },
        { id: 'R47', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada akselerasi yang bisa disebabkan oleh sistem pengapian atau penyemprotan bahan bakar.', solution: 'Periksa dan pastikan sistem pengapian serta injeksi bekerja dengan baik.' },
        { id: 'R48', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'ya', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada sistem kelistrikan motor, bisa jadi masalah kabel atau aki.', solution: 'Periksa kabel dan pastikan aki dalam kondisi baik.' },
        { id: 'R49', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'ya', akselerasi_berat: 'ya', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah pada filter udara atau sistem bahan bakar motor.', solution: 'Periksa dan ganti filter udara serta periksa pompa bahan bakar.' },
        { id: 'R50', conditions: { indikator_injeksi: 'ya', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'ya', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Bunyi aneh pada mesin kemungkinan berasal dari masalah mesin atau filter udara.', solution: 'Periksa filter udara dan pastikan mesin berjalan dengan lancar.' },
        { id: 'R51', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'tidak' }, diagnosis: 'Motor dalam kondisi normal, tidak ada masalah yang terdeteksi.', solution: 'Motor siap digunakan dan tidak perlu perbaikan.' },
        { id: 'R52', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'ya' }, diagnosis: 'Masalah kecil pada sistem pendingin, motor dalam kondisi normal secara umum.', solution: 'Periksa sistem pendingin, seperti radiator atau selang pendingin, dan pastikan sistem bekerja dengan baik.' },
        { id: 'R53', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'ya', masalah_pendingin: 'tidak' }, diagnosis: 'Masalah kecil pada kelistrikan motor, motor dalam kondisi baik secara keseluruhan.', solution: 'Periksa kabel kelistrikan dan pastikan semua sistem kelistrikan berfungsi dengan baik.' },
        { id: 'R54', conditions: { indikator_injeksi: 'tidak', mesin_sulit: 'tidak', akselerasi_berat: 'tidak', boros_bbm: 'tidak', bunyi_aneh: 'tidak', getaran_abnormal: 'tidak', asap_knalpot: 'tidak', warna_asap: 'tidak', mati_mendadak: 'tidak', masalah_listrik: 'tidak', masalah_pendingin: 'ya' }, diagnosis: 'Hanya masalah kecil pada sistem pendingin, motor masih dalam kondisi sangat baik.', solution: 'Lakukan pemeriksaan rutin pada sistem pendingin untuk memastikan kinerja optimal.' },
    ]

};

// Fungsi untuk memulai konsultasi
function startConsultation() {
    document.querySelector('#question-section').style.display = 'block';
    document.querySelector('.container.text-center').style.display = 'none';
}

// Fungsi analisis yang diperbaiki
function analyze() {
    // Validasi form
    const form = document.querySelector('#consultationForm');
    if (!isFormValid(form)) {
        alert('Mohon lengkapi semua pertanyaan!');
        return;
    }

    // Mengambil semua nilai input
    const formData = {
        keluhan: document.querySelector('#keluhan').value,
        indikator_injeksi: document.querySelector('input[name="indikator_injeksi"]:checked').value,
        mesin_sulit: document.querySelector('input[name="mesin_sulit"]:checked').value,
        bunyi_aneh: document.querySelector('input[name="bunyi_aneh"]:checked').value,
        asap_knalpot: document.querySelector('input[name="asap_knalpot"]:checked').value,
        mati_mendadak: document.querySelector('input[name="mati_mendadak"]:checked').value,
        akselerasi_berat: document.querySelector('input[name="akselerasi_berat"]:checked')?.value,
        boros_bbm: document.querySelector('input[name="boros_bbm"]:checked')?.value,
        masalah_listrik: document.querySelector('input[name="masalah_listrik"]:checked')?.value,
        masalah_pendingin: document.querySelector('input[name="masalah_pendingin"]:checked')?.value,
        getaran_abnormal: document.querySelector('input[name="getaran_abnormal"]:checked')?.value,
        warna_asap: document.querySelector('input[name="warna_asap"]:checked')?.value,
        mati_mendadak: document.querySelector('input[name="mati_mendadak"]:checked')?.value,
    };

    // Mencari rule yang paling cocok
    let matchedRule = findBestMatch(formData);
    
    // Menampilkan hasil
    displayResult(formData.keluhan, matchedRule);
}

// Fungsi untuk validasi form
function isFormValid(form) {
    const requiredInputs = form.querySelectorAll('input[required]');
    const requiredRadios = {};

    // Mengecek setiap input yang required
    for (let input of requiredInputs) {
        if (input.type === 'radio') {
            requiredRadios[input.name] = requiredRadios[input.name] || false;
            if (input.checked) {
                requiredRadios[input.name] = true;
            }
        } else if (!input.value) {
            return false;
        }
    }

    // Mengecek apakah semua radio button yang required sudah dipilih
    return Object.values(requiredRadios).every(checked => checked);
}

function findBestMatch(formData) {
    let bestMatch = null;
    let highestMatchScore = 0;

    knowledgeBase.rules.forEach(rule => {
        let matchScore = calculateMatchScore(formData, rule.conditions);
        if (matchScore > highestMatchScore) {
            highestMatchScore = matchScore;
            bestMatch = rule;
        }
    });

    return bestMatch;
}

function calculateMatchScore(formData, conditions) {
    let score = 0;
    let totalConditions = Object.keys(conditions).length;

    for (let key in conditions) {
        if (formData[key] === conditions[key]) {
            score++;
        }
    }

    return score / totalConditions;
}

function displayResult(keluhan, matchedRule) {
    let resultHTML = '';
    
    if (matchedRule) {
        resultHTML = `
            <div class="mb-3">
                <strong>Keluhan:</strong> ${keluhan}
            </div>
            <div class="mb-3">
                <strong>Diagnosis:</strong> ${matchedRule.diagnosis}
            </div>
            <div class="mb-3">
                <strong>Solusi yang Disarankan:</strong> ${matchedRule.solution}
            </div>
        `;
    } else {
        resultHTML = `
            <div class="mb-3">
                <strong>Keluhan:</strong> ${keluhan}
            </div>
            <div class="mb-3">
                <strong>Diagnosis:</strong> Tidak dapat menentukan masalah spesifik
            </div>
            <div class="mb-3">
                <strong>Saran:</strong> Silakan kunjungi bengkel AHASS terdekat untuk pemeriksaan lebih lanjut
            </div>
        `;
    }

    document.querySelector('#question-section').style.display = 'none';
    document.querySelector('#result-section').style.display = 'block';
    document.querySelector('#analysis-result').innerHTML = resultHTML;
}

// Fungsi reset
function reset() {
    document.querySelector('#consultationForm').reset();
    document.querySelector('#question-section').style.display = 'none';
    document.querySelector('#result-section').style.display = 'none';
    document.querySelector('.container.text-center').style.display = 'block';
}

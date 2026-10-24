document.addEventListener('DOMContentLoaded', function () {
  khoiTaoTimKiemBang();
  khoiTaoChonTatCaCheckbox();
  khoiTaoDongBoDuAnVaMenuMobile();
});

function khoiTaoDongBoDuAnVaMenuMobile() {
  // Mobile drawer toggle
  const nutMenu = document.getElementById('nutMenuMobile');
  const nutDong = document.getElementById('nutDongMenuMobile');
  const lopPhu = document.getElementById('lopPhuMobile');
  const thanhBen = document.getElementById('thanhBen');

  function moMenu() {
    if (thanhBen) thanhBen.classList.add('mo-menu-mobile');
    if (lopPhu) lopPhu.classList.add('hien-thi');
  }

  function dongMenu() {
    if (thanhBen) thanhBen.classList.remove('mo-menu-mobile');
    if (lopPhu) lopPhu.classList.remove('hien-thi');
  }

  if (nutMenu) nutMenu.addEventListener('click', moMenu);
  if (nutDong) nutDong.addEventListener('click', dongMenu);
  if (lopPhu) lopPhu.addEventListener('click', dongMenu);

  // Sync current project
  const siteSelect = document.getElementById('siteSelect');
  const topbarTitle = document.getElementById('topbarProjectTitle');
  const savedProject = localStorage.getItem('sitesafe_current_project') || 'Metro Tower - Khu B';

  if (siteSelect) {
    siteSelect.value = savedProject;
    siteSelect.addEventListener('change', function (e) {
      const val = e.target.value;
      localStorage.setItem('sitesafe_current_project', val);
      if (topbarTitle) {
        topbarTitle.textContent = val;
      }
    });
  }

  if (topbarTitle) {
    topbarTitle.textContent = savedProject;
  }
}

function khoiTaoTimKiemBang() {
  const oNhap = document.getElementById('oNhapTimKiem');
  if (oNhap) {
    oNhap.addEventListener('input', function (e) {
      const tuKhoa = e.target.value.toLowerCase().trim();
      const danhSachDong = document.querySelectorAll('#bangKiemTra tbody tr');

      danhSachDong.forEach(function (dong) {
        const noiDung = dong.textContent.toLowerCase();
        dong.style.display = noiDung.includes(tuKhoa) ? '' : 'none';
      });
    });
  }
}

function khoiTaoChonTatCaCheckbox() {
  const chonTatCa = document.getElementById('chonTatCa');
  const danhSachOTich = document.querySelectorAll('#bangKiemTra tbody input[type="checkbox"]');

  if (chonTatCa) {
    chonTatCa.addEventListener('change', function (e) {
      const trangThai = e.target.checked;
      danhSachOTich.forEach(function (oTich) {
        oTich.checked = trangThai;
      });
    });
  }
}
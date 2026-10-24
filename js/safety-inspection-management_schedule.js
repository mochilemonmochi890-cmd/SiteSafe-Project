document.addEventListener('DOMContentLoaded', function () {
  khoiTaoSuKienLich();
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

function khoiTaoSuKienLich() {
  const nutHomNay = document.getElementById('nutHomNay');
  if (nutHomNay) {
    nutHomNay.addEventListener('click', function () {
      alert('Đã quay về mốc thời gian hôm nay (03/10/2026)!');
    });
  }

  const danhSachSuKien = document.querySelectorAll('.su-kien-lich');
  danhSachSuKien.forEach(function (khoi) {
    khoi.style.cursor = 'pointer';
    khoi.addEventListener('click', function () {
      const ten = khoi.querySelector('strong') ? khoi.querySelector('strong').textContent : '';
      const thoiGian = khoi.querySelector('.gio-su-kien') ? khoi.querySelector('.gio-su-kien').textContent : '';

      alert(`Chi tiết đợt kiểm tra:\nTên: ${ten}\nThời gian: ${thoiGian}`);
    });
  });
}
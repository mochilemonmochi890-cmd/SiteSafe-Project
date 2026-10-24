document.addEventListener('DOMContentLoaded', function () {
  khoiTaoSuKienCanhBao();
  khoiTaoChucNangLocSuCo();
  khoiTaoNutHanhDongNhanh();
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
        topbarTitle.innerHTML = `${val} <i class="fa-solid fa-chevron-down"></i>`;
      }
    });
  }

  if (topbarTitle) {
    topbarTitle.innerHTML = `${savedProject} <i class="fa-solid fa-chevron-down"></i>`;
  }
}

function khoiTaoSuKienCanhBao() {
  const lienKet = document.querySelector('.lien-ket-canh-bao');
  if (lienKet) {
    lienKet.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Đang chuyển hướng tới danh sách sự cố quá hạn.');
    });
  }
}

function khoiTaoChucNangLocSuCo() {
  const danhSachTab = document.querySelectorAll('.tab-nho');
  const danhSachSuCo = document.querySelectorAll('.the-su-co');

  danhSachTab.forEach(function (tab) {
    tab.addEventListener('click', function () {
      danhSachTab.forEach(function (t) { t.classList.remove('kich-hoat'); });
      tab.classList.add('kich-hoat');

      const loai = tab.textContent.trim();
      danhSachSuCo.forEach(function (the) {
        if (loai.includes('Quá hạn')) {
          the.style.display = the.classList.contains('nguy-hiem') ? 'block' : 'none';
        } else if (loai.includes('Chờ duyệt')) {
          the.style.display = the.classList.contains('canh-bao') ? 'block' : 'none';
        } else {
          the.style.display = 'block';
        }
      });
    });
  });
}

function khoiTaoNutHanhDongNhanh() {
  const danhSachNut = document.querySelectorAll('.chan-su-co .nut-chinh');
  danhSachNut.forEach(function (nut) {
    nut.addEventListener('click', function () {
      alert('Đã gửi yêu cầu xử lý thành công!');
    });
  });
}
// ==========================================
// 1. TÍNH NĂNG TỰ ĐỘNG CẬP NHẬT NĂM BẢN QUYỀN
// ==========================================

// Tìm thẻ span có id là "current-year" trong HTML
const yearSpan = document.getElementById("current-year");

// Lấy năm hiện tại từ hệ thống máy tính (ví dụ: 2026)
const currentYear = new Date().getFullYear();

// Gắn con số năm vừa lấy được vào trong thẻ span
yearSpan.textContent = currentYear;


// ==========================================
// 2. TÍNH NĂNG THÔNG BÁO KHI BẤM NÚT SEARCH
// ==========================================

// Tìm nút bấm có id là "search-btn"
const searchBtn = document.getElementById("search-btn");

// Bắt sự kiện: Lắng nghe xem khi nào người dùng "click" vào nút đó
searchBtn.addEventListener("click", function() {
    // Hiện ra một hộp thoại thông báo
    alert("This feature is currently under development. Please try again later!");
});

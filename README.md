# Mì Trộn Cô Xi (Mì Trộn XUXI) - Landing Page

Trang Landing Page chính thức của thương hiệu **Mì Trộn Cô Xi (Mì Trộn XUXI)** – Đặc sản mì trộn đường phố Sài Gòn đậm vị, sốt phô mai béo ngậy và sốt sa tế bí truyền.

Được tối ưu hoá với **SwiperJS** cho các hiệu ứng trượt mượt mà trên mọi thiết bị và sẵn sàng deploy 100% trên **Vercel**.

---

## 🚀 Hướng dẫn Deploy lên Vercel

Dự án đã được cấu hình chuẩn tĩnh (Static Site) với tệp [`vercel.json`](vercel.json), sẵn sàng triển khai ngay lập tức.

### Cách 1: Deploy qua Vercel Dashboard & GitHub (Khuyên dùng)
1. Đẩy mã nguồn dự án lên một kho chứa (repository) trên **GitHub** hoặc **GitLab**:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page mi tron co xi with swiper"
   git remote add origin https://github.com/your-username/mitroncoxi-sieungon.git
   git branch -M main
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập.
3. Bấm **"Add New..."** -> **"Project"**.
4. Chọn repository vừa đẩy lên và bấm **"Import"**.
5. Giữ nguyên toàn bộ cấu hình mặc định (Framework Preset: **Other**) -> Bấm **"Deploy"**.
6. Vercel sẽ tự động build và cấp tên miền miễn phí (VD: `mitroncoxi-sieungon.vercel.app`) kèm chứng chỉ SSL HTTPS và CDN toàn cầu.

### Cách 2: Deploy trực tiếp qua Vercel CLI
Nếu bạn đã cài đặt Node.js:
```bash
# Cài đặt Vercel CLI nếu chưa có
npm i -g vercel

# Đăng nhập và deploy
vercel
```

---

## 📂 Cấu trúc thư mục dự án

```
mitroncoxi-sieungon/
├── assets/             # Toàn bộ hình ảnh thực tế (Logo, Món ăn, Poster, Bao bì ly)
├── css/
│   └── style.css       # Hiệu ứng cheese-drip, animation và tùy biến theme Swiper
├── js/
│   └── app.js          # Khởi tạo SwiperJS, giỏ hàng, thông báo Toast, Mobile menu
├── index.html          # Trang chủ Landing Page hoàn chỉnh
├── vercel.json         # Cấu hình tối ưu bộ nhớ đệm và định tuyến cho Vercel
├── package.json        # Thông tin dự án và tập lệnh xem trước (serve)
└── .gitignore          # Tệp bỏ qua các file tạm
```

---

## 🌟 Các tính năng nổi bật & Hiệu ứng SwiperJS

- **Hero Swiper**: Trình chiếu các món ăn best-seller với hiệu ứng mượt mà và nút điều hướng sang xịn.
- **Topping & Nguyên Liệu Swiper**: Băng chuyền vuốt chạm mượt mà tự động cuộn (Auto-scroll), hiển thị ảnh nguyên liệu tươi sạch chuẩn an toàn vệ sinh.
- **Bao Bì Ly Giấy & Poster Swiper**: Khám phá bản vẽ thiết kế ly 2 lớp và poster quảng bá chính thức, hỗ trợ phóng to (Lightbox Zoom).
- **Thực Khách Đánh Giá Swiper**: Lời khen và feedback thực tế từ học sinh, sinh viên và dân văn phòng.
- **Tương tác Đặt Món**: Chọn món tự động điền đơn và cuộn tới form, thông báo xác nhận dạng Toast sinh động.
- **Thông tin liên hệ thực tế**:
  - Hotline: `0906.711.012`
  - Địa chỉ: `1 Phan Văn Trường, Phường Bến Thành, Thành Phố Hồ Chí Minh`
  - Giờ mở cửa: `15:00 - 19:00 (Thứ 2 - Thứ 6)`
  - Email: `loitucanh12atn1@gmail.com`
  - Facebook: `https://www.facebook.com/tucanh.loi.1`

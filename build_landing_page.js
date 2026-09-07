const fs = require('fs');

let html = fs.readFileSync('index_stitch.html', 'utf8');

// 1. Replace all external image URLs with local assets
const urlReplacements = [
  {
    from: "https://lh3.googleusercontent.com/aida/AEtjO1X7KrwpbOn7mhDY53Vdwl3HJeA4JVOI4jSxnjny2iLjAJLOQUH7DwcEw02yJQoDXSGgrUB3QcJuFDt2IpHGMAvMZoRckHxdNYf2ZF9lUDRpDUV6yps0P2NtQfDJdx6u0jgy78lCfAGmh90A0yxNoYZL81_jWo2LNPgDb7_ZGcn2MCNIwDuOi5npoPMY1KTzav6TBwrGlWMofq0GGXVZ57ToQ5vpHHtMXwkfoWM_k7Yqzf-8oMUnJIXb5qRtaohY92o0W_b3x7KOZg",
    to: "assets/logo.png"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzoXfFue5pR1p4CgoDNuk_z9XRymIzBElGzMy3a2V2nd728X0jimgttcXMv6HNXlp0dSxU2nYLvwn0c8mqKHoVdkcctuV9zd34tKR-reHZ7D46v08W9Us-f4jMA4afu7TNWcAUNCHS6CiWxOqKjS5Zxvp5tWdF6AWYJtAArj3o-pJWwwmRVBlvC7ba_XJqiAdyGBg6WfWFE_veSOE8tAEq7q8Dsw1LMm9_8fw0l6KUHrlHP1qpxYjSZrp2RVGggrDTm-M",
    to: "assets/dish_5.jpg"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1EdHcMZvRYRcFJXdrQcIF967Aezd51y-RwQg9iprUlSJXuSBHEG6Fvg6zpOAlwCdv5xV4FXW2QpJRNtvZpluOZBnqTv5LqX0fUBBdYzYbEokND6H6n0-L97ZMnut1QuoyjD3BqD2c5RC99IzPXaMOsQ86SbKrbuAF5uybys42lqJcuXw-lZHlcIEYcpZBLkmw1FF3gCqqdlfhXr18hop5LcoGkelamWhavDMM4O10m9M5DbTwHQNWhCeYa0Oxxkj2PM",
    to: "assets/dish_4.jpg"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuD40lzhyk7qVAC62c8IFRdzyTr1wOVAbfTkUObtYNWHekiLyVOeoHrkD7pp79iXVaqFMP8fp1uYf3uTE5AdsWaIQYx623RflCyrSUeUrHWOjE9Kpqz_jZolFvEv-zI-8kk1VqOBQlq0sQngqPNFITSjIdCdnOJclvXg4_TxpiNVHk7KJYP1n2GncKFhtHs_thBXS--yFDOe-6NPhcTZrrkOfWa9WX6zzSorVbMvUn7U5wk5U_qwR6_khClYhItsJVnAq2I",
    to: "assets/dish_3.jpg"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQl6d1VzW9W3DcxO2yGjC_bA4u6eX-H-vOq713W_2-E7j3bB8qJ2w7s-Ff6g8K1M7g3-jX9pQ1oZ-9-qC6Z_nU3R-oZ9lY-vK6jK-P0eD5-zL3Q6A-p4-2_Y7eB5-h8p0u2K-a4-fX_k",
    to: "assets/packaging_strip.jpg"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8o1-pasLvHIVhDyUUzuAxO7bkF_t5m15_WRh42PivFI5acfFYlDWnqwamzssdseF9giLru_zXxxrnxqcXz6jWPudppDO7Z4nGOgPMtLfFc3EgqECkmCfchsUC7pT1HeVYLs2Lmo9vlrKvjcIz-qQOyMcHXugYjcY3fCiwCVP4mUz1jbQj8CNGZOhqBWNZQHfkvSz_nnTHNc48wIHoGyrYLoSaoMCq58SRdFs6kjZwDvImSejWXSZidno_Qptmvp1_U8M",
    to: "assets/dish_2.jpg"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcMd9A-OMkZAJsKj1_EAW7Jo2LJpN6dh4dOHgFyBMlSzr8zfAP_RVhPnp-NO0Yon1kqMDmuU9agBa-L07EyffIZlLaKFmaKZcWEY7H-xQaiUoUFSc6PWzeWFcOf8t9dVdJji0_Fwz3ieD8X2ryXUBu0Zxi9umvNe7SQaPIpGX8DEP8zFkKQT8nJaSc4SuNosuOkkvDs0bkdOxbgDyiPVJ4fH6jjm5_pZEV6-DW_DfP3F02CvElt5ZJAcYe_GY_2wKQNR4",
    to: "assets/dish_7.jpg"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYujOvUewUfronUMhajVTQlljHxKR-XscMal7PGm6iedDBKORBuHo9p1sDZkaotyBlAFmamA4lx3f5LDLRytq4L3A1fId6dEFvXSEf30pjoIt7f1qlFC0IajxocVUNh6_yUUWkJZmIGi5hesvT8Dpf6Y8esUcg5IlbCV_pMHZG9KpOpDDz8EhkR1MRSPo1ZXswyWClo_6tSV5Fl-dXEeiAiVS6wAkPYDeTo9qruIPMZO3SRe79aJhaahCxi833oBAu3kk",
    to: "assets/dish_6.jpg"
  },
  {
    from: "https://lh3.googleusercontent.com/aida-public/AB6AXuD61ng6wkEv-Mpnnh3OJf_5jqlsplPx75sMYtFn53y_q_xZjimR-skpZDtEmHTp7Ac30livuLPTydivB08bMftAE434THmey7kNbxlwsSIBNye6yml_NYQB687JKhj5pMUAzciIl9qyoCxA4xJ1hQSB4kD43_le9ACHSoPj8OQ-oT9arD0xSwh60HicL1-rQhVHp2GfA-AtZhi8KvvKsRqu2OrQ5ATB03qWWMEUxGEGEAMXJKlmlCuX6HilRboSMALyrAc",
    to: "assets/dish_1.jpg"
  }
];

for (const rep of urlReplacements) {
  html = html.replaceAll(rep.from, rep.to);
}

// 2. User info updates
html = html.replaceAll('tel:07712578898', 'tel:0906711012');
html = html.replaceAll('077 12 578 898', '0906.711.012');

// Review update
html = html.replaceAll(
  'Xe mì của Cô Xi ngay Hàng Thu nhìn dễ thương và sạch bóng loáng.',
  'Xe mì của Cô Xi ngay đường Phan Văn Trường, Bến Thành nhìn dễ thương và sạch bóng loáng.'
);

// Order section store address & contact block
const oldStoreAddressBlock = `<div class="flex items-start gap-space-sm">
<span class="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">location_on</span>
<div>
<span class="font-label-md text-label-md font-bold text-on-surface block">Địa Chỉ Quầy Xe Mì:</span>
<span class="font-body-md text-body-md text-on-surface-variant font-medium">33 Hàng Thu, TT. Đồng Địn (Chi nhánh chính)</span>
<span class="font-body-sm text-body-sm text-on-surface-variant block mt-1">Chi nhánh 2: 124/8 Đường Số 1, P. 11, Gò Vấp, TP.HCM</span>
</div>
</div>`;

const newStoreAddressBlock = `<div class="flex items-start gap-space-sm">
<span class="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">location_on</span>
<div>
<span class="font-label-md text-label-md font-bold text-on-surface block">Địa Chỉ Quầy Xe Mì:</span>
<span class="font-body-md text-body-md text-on-surface-variant font-medium">1 Phan Văn Trường, Phường Bến Thành, Thành Phố Hồ Chí Minh</span>
</div>
</div>
<div class="flex items-start gap-space-sm">
<span class="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">mail</span>
<div>
<span class="font-label-md text-label-md font-bold text-on-surface block">Email Liên Hệ & Góp Ý:</span>
<a href="mailto:loitucanh12atn1@gmail.com" class="font-body-md text-body-md text-primary font-medium hover:underline">loitucanh12atn1@gmail.com</a>
</div>
</div>
<div class="flex items-start gap-space-sm">
<span class="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">public</span>
<div>
<span class="font-label-md text-label-md font-bold text-on-surface block">Facebook Chính Thức:</span>
<a href="https://www.facebook.com/tucanh.loi.1" target="_blank" rel="noopener noreferrer" class="font-body-md text-body-md text-primary font-medium hover:underline">fb.com/tucanh.loi.1</a>
</div>
</div>`;

html = html.replace(oldStoreAddressBlock, newStoreAddressBlock);

// Hours in Order Section
html = html.replace(
  '<span class="font-body-md text-body-md text-on-surface-variant">09:30 - 22:30 hàng ngày (kể cả Lễ, Tết)</span>',
  '<span class="font-body-md text-body-md text-on-surface-variant">15H00 - 19H00 (Từ Thứ 2 đến Thứ 6)</span>'
);

// Footer address block
const oldFooterAddresses = `<div class="flex items-start gap-space-xs text-on-surface-variant"><span class="material-symbols-outlined text-primary text-[22px] shrink-0">location_on</span><span class="font-body-sm text-body-sm">33 Hàng Thu, TT. Đồng Địn (Chi nhánh chính)</span></div><div class="flex items-start gap-space-xs text-on-surface-variant"><span class="material-symbols-outlined text-primary text-[22px] shrink-0">storefront</span><span class="font-body-sm text-body-sm">Chi nhánh 2: 124/8 Đường Số 1, Phường 11, Quận Gò Vấp, TP.HCM</span></div>`;

const newFooterAddresses = `<div class="flex items-start gap-space-xs text-on-surface-variant"><span class="material-symbols-outlined text-primary text-[22px] shrink-0">location_on</span><span class="font-body-sm text-body-sm">1 Phan Văn Trường, Phường Bến Thành, Thành Phố Hồ Chí Minh</span></div><div class="flex items-start gap-space-xs text-on-surface-variant"><span class="material-symbols-outlined text-primary text-[22px] shrink-0">mail</span><a href="mailto:loitucanh12atn1@gmail.com" class="font-body-sm text-body-sm hover:text-primary hover:underline">loitucanh12atn1@gmail.com</a></div>`;

html = html.replace(oldFooterAddresses, newFooterAddresses);

// Footer hours
const oldFooterHours = `<div><span class="font-label-md text-label-md text-on-surface block">Thứ 2 - Chủ Nhật</span><span class="font-body-sm text-body-sm">09:30 Sáng - 22:30 Tối</span><span class="font-label-sm text-label-sm text-secondary block mt-space-2xs font-bold">(Nhận đơn online qua hotline &amp; app)</span></div>`;

const newFooterHours = `<div><span class="font-label-md text-label-md text-on-surface block">Thứ 2 - Thứ 6</span><span class="font-body-sm text-body-sm">15:00 Chiều - 19:00 Tối</span><span class="font-label-sm text-label-sm text-secondary block mt-space-2xs font-bold">(Nghỉ Thứ 7, Chủ Nhật &amp; Ngày Lễ)</span></div>`;

html = html.replace(oldFooterHours, newFooterHours);

// Footer social links
const oldSocialIcons = `<div class="flex items-center gap-space-sm"><span class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary"><span class="material-symbols-outlined text-[20px]">share</span></span><span class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary"><span class="material-symbols-outlined text-[20px]">thumb_up</span></span><span class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary"><span class="material-symbols-outlined text-[20px]">chat</span></span></div>`;

const newSocialIcons = `<div class="flex items-center gap-space-sm">
  <a href="https://www.facebook.com/tucanh.loi.1" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" title="Facebook Mì Trộn Cô Xi">
    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  </a>
  <a href="mailto:loitucanh12atn1@gmail.com" class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" title="Gửi Email">
    <span class="material-symbols-outlined text-[20px]">mail</span>
  </a>
  <a href="tel:0906711012" class="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" title="Gọi Hotline 0906.711.012">
    <span class="material-symbols-outlined text-[20px]">phone</span>
  </a>
</div>`;

html = html.replace(oldSocialIcons, newSocialIcons);

// 3. Head Enhancement: Add Swiper CSS, Custom CSS & SEO
const enhancedHead = `
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Mì Trộn Cô Xi - Mì Trộn XUXI | Đặc Sản Đường Phố Sài Gòn Đậm Vị</title>
<meta name="description" content="Mì Trộn Cô Xi (Mì Trộn XUXI) tại 1 Phan Văn Trường, P. Bến Thành, TP.HCM. Phục vụ 15h - 19h từ T2 - T6. Hotline 0906.711.012. 2 vị sốt độc quyền Sốt Phô Mai & Sốt Sa Tế Bí Truyền!">
<meta name="keywords" content="Mì Trộn Cô Xi, Mì Trộn XUXI, 1 Phan Văn Trường Bến Thành, Mì trộn phô mai, Mì trộn sa tế">
<meta property="og:title" content="Mì Trộn Cô Xi - Chuẩn Nhận Diện Bao Bì Sốt Phô Mai & Sốt Đặc Biệt">
<meta property="og:description" content="Thưởng thức mì trộn sợi dai mướt kết hợp 2 dòng sốt đỉnh cao tại 1 Phan Văn Trường, P. Bến Thành, TP.HCM.">
<meta property="og:image" content="assets/poster.jpg">
<link rel="icon" type="image/png" href="assets/logo.png">

<!-- Swiper CSS v11 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

<!-- Project Custom CSS -->
<link rel="stylesheet" href="css/style.css" />
`;
html = html.replace(/<meta charset="utf-8"\/><meta content="width=device-width, initial-scale=1.0" name="viewport"\/><title>Mì Trộn Cô Xi - Mì Trộn XUXI<\/title>/, enhancedHead);

if (!html.includes('scroll-smooth')) {
  html = html.replace('<html lang="vi">', '<html lang="vi" class="scroll-smooth">');
}

// 4. Hero Section: Transform to Dynamic Swiper Food Showcase
const heroColStart = html.indexOf('<div class="lg:col-span-5 relative flex justify-center items-center">');
const heroColEnd = html.indexOf('</div>\n</div>\n</div>\n</section>', heroColStart);

if (heroColStart !== -1 && heroColEnd !== -1) {
  const newHeroRightCol = `<div class="lg:col-span-5 relative flex justify-center items-center">
  <div class="relative w-full max-w-[480px]">
    <div class="swiper hero-swiper shadow-2xl rounded-3xl border-4 border-surface-container-lowest bg-surface-container-high overflow-hidden">
      <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide relative aspect-[3/4] bg-amber-50">
          <img src="assets/dish_5.jpg" alt="Tô Mì Trộn XUXI Đặc Biệt" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-secondary text-white text-xs font-black uppercase px-3 py-1 rounded-full inline-block mb-1 shadow-md">Best Seller #1</span>
            <h3 class="font-headline-sm text-xl font-black leading-tight">Mì Trộn Đầy Đủ Topping XUXI</h3>
            <p class="text-xs text-white/90 mt-1">Sợi mì dai giòn quyện sốt sa tế & phô mai béo ngậy</p>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide relative aspect-[3/4] bg-orange-50">
          <img src="assets/dish_4.jpg" alt="Mì Trộn Sốt Phô Mai Kéo Sợi" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-amber-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full inline-block mb-1 shadow-md">Sốt Độc Quyền</span>
            <h3 class="font-headline-sm text-xl font-black leading-tight">Sốt Phô Mai Kéo Sợi Ngút Ngàn</h3>
            <p class="text-xs text-white/90 mt-1">Chảy tràn ngập ngụa, béo bùi thơm lừng chuẩn vị</p>
          </div>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide relative aspect-[3/4] bg-red-50">
          <img src="assets/dish_3.jpg" alt="Mì Trộn Sốt Sa Tế Cay Tê" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-red-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full inline-block mb-1 shadow-md">Cay Tê Tái</span>
            <h3 class="font-headline-sm text-xl font-black leading-tight">Sốt Sa Tế Cay Nồng Bí Truyền</h3>
            <p class="text-xs text-white/90 mt-1">Ớt sả xào tay thơm nức mũi, đậm đà Sài Gòn</p>
          </div>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide relative aspect-[3/4] bg-amber-100">
          <img src="assets/poster.jpg" alt="Poster Mì Trộn Cô Xi" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-primary text-white text-xs font-black uppercase px-3 py-1 rounded-full inline-block mb-1 shadow-md">Nhận Diện XUXI</span>
            <h3 class="font-headline-sm text-xl font-black leading-tight">Thương Hiệu Mì Trộn Cô Xi</h3>
            <p class="text-xs text-white/90 mt-1">1 Phan Văn Trường, P. Bến Thành, TP.HCM</p>
          </div>
        </div>
      </div>
      <!-- Swiper Controls -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <!-- Floating Mascot Speech Badge -->
    <div class="absolute -top-4 -left-4 bg-surface/95 backdrop-blur-md p-space-sm rounded-2xl shadow-xl flex items-center gap-space-xs max-w-[240px] border border-primary/20 z-20 animate-float">
      <img alt="Cô Xi" class="w-10 h-10 rounded-full object-cover shrink-0 border border-primary" src="assets/logo.png"/>
      <p class="font-label-sm text-label-sm text-on-surface font-extrabold leading-tight">
        "Mì trộn ngon nhớ đời, ăn một tô là dính liền nha!"
      </p>
    </div>

    <!-- Floating Sticker Cheese & Chili -->
    <div class="absolute -bottom-4 -right-4 bg-secondary-container/95 text-on-secondary-container px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-2xs animate-pulse z-20">
      <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">whatshot</span>
      <span class="font-label-md text-label-md font-black tracking-wide">Sa Tế &amp; Phô Mai Siêu Cháy</span>
    </div>
  </div>
</div>`;
  html = html.slice(0, heroColStart) + newHeroRightCol + html.slice(heroColEnd);
}

// 5. Section 3 (Topping & Nguyên Liệu): Transform to Swiper Carousel
const topGridStart = html.indexOf('<div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-2xl">', 37000);
const topGridEnd = html.indexOf('<!-- 4 Cam Kết Vàng Minh Chứng -->', topGridStart);

if (topGridStart !== -1 && topGridEnd !== -1) {
  const newToppingSwiper = `<!-- Swiper Topping & Nguyên Liệu Carousel -->
<div class="relative mb-space-2xl">
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center gap-2">
      <span class="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
      <span class="text-xs font-bold uppercase tracking-wider text-primary">Vuốt chạm để khám phá nguyên liệu sạch</span>
    </div>
    <div class="flex items-center gap-2">
      <button class="topping-prev w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="Lùi lại">
        <span class="material-symbols-outlined text-[20px]">chevron_left</span>
      </button>
      <button class="topping-next w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="Tiếp theo">
        <span class="material-symbols-outlined text-[20px]">chevron_right</span>
      </button>
    </div>
  </div>

  <div class="swiper topping-swiper">
    <div class="swiper-wrapper">
      <!-- Slide 1 -->
      <div class="swiper-slide">
        <div class="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-surface shadow-md border border-outline-variant/30 w-full cursor-pointer" onclick="openLightbox('assets/dish_2.jpg', 'Thịt Băm & Xá Xíu Tươi Mỗi Sáng')">
          <img alt="Thịt băm xào thơm lừng và nguyên liệu tươi sạch" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="assets/dish_2.jpg"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#250905]/85 via-black/20 to-transparent flex flex-col justify-end p-space-md text-surface">
            <span class="font-headline-sm text-headline-sm font-bold block mb-1 text-amber-300">Thịt Băm & Xá Xíu Tươi</span>
            <p class="font-body-sm text-body-sm opacity-90">Ướp gia vị chuẩn truyền thống, xào mới mỗi sáng tại xe mì.</p>
          </div>
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="swiper-slide">
        <div class="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-surface shadow-md border border-outline-variant/30 w-full cursor-pointer" onclick="openLightbox('assets/dish_7.jpg', 'Sợi Mì Trứng Dai Mướt 90 Giây')">
          <img alt="Sợi mì dai giòn trụng chuẩn thời gian" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="assets/dish_7.jpg"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#250905]/85 via-black/20 to-transparent flex flex-col justify-end p-space-md text-surface">
            <span class="font-headline-sm text-headline-sm font-bold block mb-1 text-amber-300">Sợi Mì Trứng Dai Mướt</span>
            <p class="font-body-sm text-body-sm opacity-90">Trụng đúng 90 giây ở nhiệt độ 100°C để sợi mì dai giòn sần sật.</p>
          </div>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="swiper-slide">
        <div class="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-surface shadow-md border border-outline-variant/30 w-full cursor-pointer" onclick="openLightbox('assets/dish_6.jpg', 'Rau Tươi & Trứng Lòng Đào Béo Bùi')">
          <img alt="Topping rau củ quả ngô ngọt và trứng ốp la" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="assets/dish_6.jpg"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#250905]/85 via-black/20 to-transparent flex flex-col justify-end p-space-md text-surface">
            <span class="font-headline-sm text-headline-sm font-bold block mb-1 text-amber-300">Trứng Lòng Đào Béo Ngậy</span>
            <p class="font-body-sm text-body-sm opacity-90">Trứng béo bùi tan chảy, tép mỡ giòn rụm và dưa chuột ngô ngọt.</p>
          </div>
        </div>
      </div>
      <!-- Slide 4 -->
      <div class="swiper-slide">
        <div class="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-surface shadow-md border border-outline-variant/30 w-full cursor-pointer" onclick="openLightbox('assets/dish_1.jpg', 'Tô Mì Trộn Đầy Đặn Thành Phẩm')">
          <img alt="Tô Mì Trộn XUXI Đầy Đặn Topping" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="assets/dish_1.jpg"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#250905]/85 via-black/20 to-transparent flex flex-col justify-end p-space-md text-surface">
            <span class="font-headline-sm text-headline-sm font-bold block mb-1 text-amber-300">Tô Mì Đầy Đặn Thành Phẩm</span>
            <p class="font-body-sm text-body-sm opacity-90">Trộn đều tay với sốt độc quyền, ngập tràn topping no nê.</p>
          </div>
        </div>
      </div>
      <!-- Slide 5 -->
      <div class="swiper-slide">
        <div class="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-surface shadow-md border border-outline-variant/30 w-full cursor-pointer" onclick="openLightbox('assets/dish_4.jpg', 'Sốt Phô Mai Kéo Sợi')">
          <img alt="Sốt Phô Mai Độc Quyền" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="assets/dish_4.jpg"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#250905]/85 via-black/20 to-transparent flex flex-col justify-end p-space-md text-surface">
            <span class="font-headline-sm text-headline-sm font-bold block mb-1 text-amber-300">Sốt Phô Mai Nấu Tay</span>
            <p class="font-body-sm text-body-sm opacity-90">Hỗn hợp phô mai cao cấp đun chảy mịn màng, kéo sợi ngút ngàn.</p>
          </div>
        </div>
      </div>
      <!-- Slide 6 -->
      <div class="swiper-slide">
        <div class="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-surface shadow-md border border-outline-variant/30 w-full cursor-pointer" onclick="openLightbox('assets/packaging_strip.jpg', 'Bản Vẽ Thiết Kế Ly Giấy XUXI')">
          <img alt="Bao bì ly giấy 2 lớp" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="assets/packaging_strip.jpg"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#250905]/85 via-black/20 to-transparent flex flex-col justify-end p-space-md text-surface">
            <span class="font-headline-sm text-headline-sm font-bold block mb-1 text-amber-300">Bao Bì Ly Giấy Giữ Nhiệt</span>
            <p class="font-body-sm text-body-sm opacity-90">Ly giấy 2 lớp chống nóng, an toàn sức khỏe và giữ ấm 45 phút.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination mt-6"></div>
  </div>
</div>
`;
  html = html.slice(0, topGridStart) + newToppingSwiper + html.slice(topGridEnd);
}

// 6. Section 5 (Cảm Nhận Thực Khách): Transform to Swiper Carousel
const revGridStart = html.indexOf('<div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">', 45000);
const revGridEnd = html.indexOf('</div>\n</div>\n</section>', revGridStart);

if (revGridStart !== -1 && revGridEnd !== -1) {
  const newReviewsSwiper = `<!-- Swiper Reviews Carousel -->
<div class="relative">
  <div class="flex items-center justify-end gap-2 mb-4">
    <button class="reviews-prev w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="Đánh giá trước">
      <span class="material-symbols-outlined text-[20px]">chevron_left</span>
    </button>
    <button class="reviews-next w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="Đánh giá sau">
      <span class="material-symbols-outlined text-[20px]">chevron_right</span>
    </button>
  </div>

  <div class="swiper reviews-swiper pb-10">
    <div class="swiper-wrapper">
      <!-- Review 1 -->
      <div class="swiper-slide">
        <div class="bg-surface p-space-lg rounded-3xl shadow-sm flex flex-col justify-between border border-outline-variant/20 w-full h-full hover:shadow-md transition-shadow">
          <div>
            <div class="flex items-center gap-space-xs text-amber-500 mb-space-xs">
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface font-medium italic mb-space-md">
              "Sốt phô mai ở đây béo mà không ngấy tí nào, kéo sợi mê xỉu luôn! Ly giấy cầm đầm tay, mì mang về tới nhà vẫn nóng giòn chứ không bị bở nát."
            </p>
          </div>
          <div class="flex items-center gap-space-sm pt-space-xs border-t border-outline-variant/20">
            <div class="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-label-md">TL</div>
            <div>
              <span class="font-label-md text-label-md font-bold text-on-surface block">Thùy Linh</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Sinh viên ĐH Văn Lang</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Review 2 -->
      <div class="swiper-slide">
        <div class="bg-surface p-space-lg rounded-3xl shadow-sm flex flex-col justify-between border border-outline-variant/20 w-full h-full hover:shadow-md transition-shadow">
          <div>
            <div class="flex items-center gap-space-xs text-amber-500 mb-space-xs">
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface font-medium italic mb-space-md">
              "Điểm cộng cực lớn là sa tế thơm mùi sả tỏi xào kỹ, cay tê đúng điệu mì trộn hè phố. Đặt qua hotline 0906.711.012 giao nhanh vèo trong 25 phút!"
            </p>
          </div>
          <div class="flex items-center gap-space-sm pt-space-xs border-t border-outline-variant/20">
            <div class="w-10 h-10 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center font-label-md">QH</div>
            <div>
              <span class="font-label-md text-label-md font-bold text-on-surface block">Quốc Huy</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Nhân viên Văn phòng Bến Thành</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Review 3 -->
      <div class="swiper-slide">
        <div class="bg-surface p-space-lg rounded-3xl shadow-sm flex flex-col justify-between border border-outline-variant/20 w-full h-full hover:shadow-md transition-shadow">
          <div>
            <div class="flex items-center gap-space-xs text-amber-500 mb-space-xs">
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface font-medium italic mb-space-md">
              "Xe mì của Cô Xi ngay đường Phan Văn Trường, Bến Thành nhìn dễ thương và sạch bóng loáng. Giá học sinh 39k mà thịt trứng đầy ụ ăn no căng bụng luôn."
            </p>
          </div>
          <div class="flex items-center gap-space-sm pt-space-xs border-t border-outline-variant/20">
            <div class="w-10 h-10 rounded-full bg-amber-500/10 text-amber-800 font-bold flex items-center justify-center font-label-md">MA</div>
            <div>
              <span class="font-label-md text-label-md font-bold text-on-surface block">Mai Anh</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Thực khách thân quen</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Review 4 -->
      <div class="swiper-slide">
        <div class="bg-surface p-space-lg rounded-3xl shadow-sm flex flex-col justify-between border border-outline-variant/20 w-full h-full hover:shadow-md transition-shadow">
          <div>
            <div class="flex items-center gap-space-xs text-amber-500 mb-space-xs">
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface font-medium italic mb-space-md">
              "Combo Bữa Ăn Trọn Vẹn 49k kèm trà tắc mát lạnh là best choice cho bữa xế chiều. Sợi mì dai giòn trộn sa tế cay cay siêu cuốn!"
            </p>
          </div>
          <div class="flex items-center gap-space-sm pt-space-xs border-t border-outline-variant/20">
            <div class="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-label-md">DK</div>
            <div>
              <span class="font-label-md text-label-md font-bold text-on-surface block">Đăng Khoa</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">Food Blogger Sài Gòn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination mt-6"></div>
  </div>
</div>`;
  html = html.slice(0, revGridStart) + newReviewsSwiper + html.slice(revGridEnd);
}

// 7. Add Packaging & Brand Swiper in Section 2
const packagingSwiperBlock = `
<!-- Swiper Trình Chiếu Bao Bì & Poster Thương Hiệu -->
<div class="mt-space-xl w-full">
  <div class="swiper packaging-swiper">
    <div class="swiper-wrapper">
      <!-- Slide 1: Ly Giấy Trải Phẳng -->
      <div class="swiper-slide">
        <div class="bg-gradient-to-br from-amber-50 to-orange-100/50 p-space-md rounded-2xl border border-amber-200/60 shadow-sm flex flex-col justify-between h-full">
          <div>
            <div class="inline-flex items-center gap-1.5 bg-amber-500/15 text-amber-900 font-label-sm text-xs font-black px-3 py-1 rounded-full mb-3">
              <span class="material-symbols-outlined text-[16px]">verified</span>
              <span>Bản Vẽ Thiết Kế Trải Phẳng</span>
            </div>
            <h4 class="font-headline-sm text-lg font-black text-on-surface mb-2">Bao Bì Ly Giấy XUXI Chống Nóng</h4>
            <p class="font-body-sm text-sm text-on-surface-variant mb-4">Mẫu ly giấy chính thức in hình linh vật Cô Xi cùng biểu tượng mì trộn nóng hổi, chống thấm dầu và thân thiện với môi trường.</p>
          </div>
          <button onclick="openLightbox('assets/packaging_strip.jpg', 'Bản Thiết Kế Trải Phẳng Ly Giấy XUXI')" class="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white text-primary font-bold rounded-xl border border-primary/30 shadow-sm hover:bg-primary hover:text-white transition-all text-sm">
            <span class="material-symbols-outlined text-[18px]">zoom_in</span> Xem Bản Vẽ Chi Tiết
          </button>
        </div>
      </div>

      <!-- Slide 2: Poster Nhận Diện -->
      <div class="swiper-slide">
        <div class="bg-gradient-to-br from-red-50 to-orange-100/50 p-space-md rounded-2xl border border-red-200/60 shadow-sm flex flex-col justify-between h-full">
          <div>
            <div class="inline-flex items-center gap-1.5 bg-red-500/15 text-red-900 font-label-sm text-xs font-black px-3 py-1 rounded-full mb-3">
              <span class="material-symbols-outlined text-[16px]">campaign</span>
              <span>Poster Nhận Diện Độc Quyền</span>
            </div>
            <h4 class="font-headline-sm text-lg font-black text-on-surface mb-2">Poster Quảng Bá Mì Trộn Cô Xi</h4>
            <p class="font-body-sm text-sm text-on-surface-variant mb-4">Hình ảnh quảng bá phong cách Pop Streetwear rực rỡ, khơi gợi cơn thèm với từng sợi mì ngập tràn sốt cay tê.</p>
          </div>
          <button onclick="openLightbox('assets/poster.jpg', 'Poster Nhận Diện Thương Hiệu Mì Trộn Cô Xi')" class="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-secondary text-white font-bold rounded-xl shadow-md hover:bg-red-700 transition-all text-sm">
            <span class="material-symbols-outlined text-[18px]">visibility</span> Xem Poster Đầy Đủ
          </button>
        </div>
      </div>
    </div>
    <div class="swiper-pagination mt-4"></div>
  </div>
</div>
`;

html = html.replace(/(<!-- 3 Điểm Cộng Của Ly Giấy XUXI -->)/, `${packagingSwiperBlock}\n$1`);

// 8. Add mobile navigation drawer
const mobileDrawerHtml = `
  <!-- Mobile Navigation Drawer -->
  <div id="mobileMenu" class="fixed inset-0 bg-black/65 backdrop-blur-sm z-50 hidden transition-opacity">
    <div class="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-surface p-space-lg shadow-2xl flex flex-col justify-between overflow-y-auto">
      <div class="space-y-space-lg">
        <div class="flex items-center justify-between pb-space-sm border-b border-outline-variant/30">
          <div class="flex items-center gap-space-xs">
            <img src="assets/logo.png" alt="Mì Trộn Cô Xi" class="w-9 h-9 rounded-full border border-primary">
            <div>
              <span class="font-headline-sm text-primary font-black text-base block leading-tight">Mì Trộn Cô Xi</span>
              <span class="font-label-sm text-[11px] text-on-surface-variant font-bold">XUXI NOODLES</span>
            </div>
          </div>
          <button id="closeMobileMenu" class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary/20 transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <nav class="flex flex-col gap-1">
          <a class="mobile-nav-link font-label-lg text-body-md font-bold text-on-surface hover:text-primary py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors" href="#">Trang Chủ</a>
          <a class="mobile-nav-link font-label-lg text-body-md font-bold text-on-surface hover:text-primary py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors" href="#hai-loai-sot">Hai Vị Sốt Đỉnh Cao</a>
          <a class="mobile-nav-link font-label-lg text-body-md font-bold text-on-surface hover:text-primary py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors" href="#bao-bi-ly-giay">Bao Bì Ly Giấy XUXI</a>
          <a class="mobile-nav-link font-label-lg text-body-md font-bold text-on-surface hover:text-primary py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors" href="#combo-topping">Menu & Topping</a>
          <a class="mobile-nav-link font-label-lg text-body-md font-bold text-on-surface hover:text-primary py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors" href="#danh-gia">Cảm Nhận Thực Khách</a>
          <a class="mobile-nav-link font-label-lg text-body-md font-bold text-on-surface hover:text-primary py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors" href="#dat-mon">Đặt Món Trực Tiếp</a>
        </nav>
      </div>
      <div class="pt-space-md border-t border-outline-variant/20 space-y-3">
        <a href="#dat-mon" class="mobile-nav-link block text-center py-3 bg-gradient-to-r from-primary to-orange-600 text-white font-bold rounded-xl shadow-md hover:opacity-95">
          Đặt Món Ngay - Giao Tận Nơi
        </a>
        <a href="tel:0906711012" class="flex items-center justify-center gap-2 py-2.5 bg-surface-container text-primary font-bold rounded-xl border border-primary/20">
          <span class="material-symbols-outlined text-[18px]">phone_in_talk</span> Hotline: 0906.711.012
        </a>
      </div>
    </div>
  </div>
`;

html = html.replace(/(<div class="flex items-center gap-space-sm">[\s\S]*?)(<\/header>)/, (match, p1, p2) => {
  return `${p1}
    <button id="openMobileMenu" class="xl:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary/10 transition-colors" aria-label="Mở menu điều hướng">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
  ${mobileDrawerHtml}
</header>`;
});

// 9. Floating Widgets & Lightbox Modal
const floatingWidgets = `
  <!-- Floating Call & Order Widget -->
  <div class="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
    <a href="tel:0906711012" class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all animate-bounce" title="Gọi Hotline 0906.711.012">
      <span class="material-symbols-outlined text-[24px]">call</span>
    </a>
    <a href="#dat-mon" class="flex items-center gap-2 bg-gradient-to-r from-primary to-orange-600 text-white font-black px-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wide border-2 border-white/20">
      <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
      <span>Đặt Món Ngay</span>
    </a>
  </div>

  <!-- Image Lightbox Modal -->
  <div id="imageLightbox" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 hidden items-center justify-center p-4 transition-all">
    <div class="relative max-w-4xl max-h-[90vh] bg-surface rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-primary/20">
      <div class="p-3.5 bg-surface-container flex justify-between items-center border-b border-outline-variant/30">
        <h3 id="lightboxTitle" class="font-headline-sm text-sm md:text-base font-bold text-on-surface">Chi tiết hình ảnh</h3>
        <button id="closeLightbox" class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-colors">
          <span class="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
      <div class="overflow-auto p-4 flex items-center justify-center bg-black/10">
        <img id="lightboxImg" src="" alt="" class="max-h-[72vh] w-auto object-contain rounded-xl shadow-md transition-transform duration-300">
      </div>
      <div class="p-2.5 bg-surface-container-low text-center text-xs text-on-surface-variant font-medium">
        Nhấn ra ngoài hoặc nút đóng để quay lại trang chính
      </div>
    </div>
  </div>
`;

html = html.replace('</body>', `${floatingWidgets}\n</body>`);

// 10. Link Swiper JS and modular js/app.js before </body>
const scriptTags = `
<!-- Swiper JS v11 -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Modular App Engine -->
<script src="js/app.js"></script>
`;

html = html.replace('</body>', `${scriptTags}\n</body>`);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully generated index.html with complete Swiper carousels!');

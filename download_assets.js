const fs = require('fs');
const path = require('path');

const screens = [
  {
    id: "logo",
    title: "logo.png",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1X7KrwpbOn7mhDY53Vdwl3HJeA4JVOI4jSxnjny2iLjAJLOQUH7DwcEw02yJQoDXSGgrUB3QcJuFDt2IpHGMAvMZoRckHxdNYf2ZF9lUDRpDUV6yps0P2NtQfDJdx6u0jgy78lCfAGmh90A0yxNoYZL81_jWo2LNPgDb7_ZGcn2MCNIwDuOi5npoPMY1KTzav6TBwrGlWMofq0GGXVZ57ToQ5vpHHtMXwkfoWM_k7Yqzf-8oMUnJIXb5qRtaohY92o0W_b3x7KOZg"
  },
  {
    id: "packaging_strip",
    title: "d45d4494-0e98-48f0-82d2-7678a9ba9bf8.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1WcFGGGPcIlwteqHE2TKaYqnMeDUwcmBIJrcq89Xm0iRe5FwpTZd63ksBCvxcrP9ZEFDS2KDrnvFygYZL-uZdR_SLyzJjEMUd86cAsCg38zBcXBD3Y92riunvsJWPV89ns8cuY2BMEiopmt-JKEVOjjpMjC0JdaNL-cgIbloP1oCZx1bQr984vi3S5mcIt9vqV6fw2OzUC0o37cfvCbqNifve4aGT_S7Mq2iSdjSwDvxGFeJg4zpCPKF88diVgMFc2vWoKisrXM-7U"
  },
  {
    id: "poster",
    title: "poster.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1VihdKAXxeMs0DYPNLf1zk21hImBs0IEdzc_IzA89Ee5dWFQecfNW27PWxbTeeJScC3KhESb3SAAYAo9884UBsaxkCG2g_xuXU9A3LUh4i1-iLMv3A1m_XBSYgqM2-0Ux560e2xG_vjyZoIwu3yDaui7rH_jljaUVgt-3X7kT1BJVtMU-Y7gAy4dGRYhnxKjeaq0Ogk-YVBmvTacIvFlnNBYjodCIMZV_0WXr2D943BPaMKcm5ZOvaLkm7lGvIBwxuDWSsMcC_Dd30"
  },
  {
    id: "dish_1",
    title: "z8235386107175_ea7a53d95d120e87948f0aa8c9dcf903.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1UAm12d2VBGbqUlkT9Gh5Ck3_rZSkzyw2PNXCCTfy_MZS29NZd1F-Rq-97G7cs2b2lEhYa8ZFoMQo23VAgTFO6Ez2YlxS_PFR6_gFMbXx1jDcKJgIaZYr-XBYUz4evuvvV7fMAqxbV8H3HwlUyv5pd_sl3evMQs0Mnc1TYop-Tc6Gvh1v2vTkogaYld8m0umO34r0eCKYp6rM1t9QykcFS-Hza9xl-r84jgOlDoRjDvUS6lP3PMOCZoFPDvEwR0WG7sAEfxQ0J3AQ"
  },
  {
    id: "dish_2",
    title: "z8235386138484_503769d9ea5f9ea271bcc91b8215e755.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1VlCZffqBos_H0XGM8IgRirk2syuGi8kR65LDK6_J3o3gAQg2PSVH3zJtKsWSeIVQvxHA_fYDDJbTQL9NK8VQNHSoZ9EtmDeK0F0LwNhqKzxinrb0pa1MlSYGHo-rvEkwJ2_dmSJcimZchYJywB2ZULdn0hHC6pRM_aQ2I_3XUa0IsVmbDUf-z7YKIyeb9F_5HbIOX6e-m63wt3AxDiYKQ5rUII1B2Ma5RIBV_juQDGmaKSWDIwoh05BQOwpIUsJet8Npea_5TCuA"
  },
  {
    id: "dish_3",
    title: "z8235386141194_0f7d3293d2b28ced2d580a74103a77c8.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1WCR_139KrZUE2uafRU8xckoq4DqMLrjddbZDMJESQUO_cfHQnWhS9RF9iQ6yGp1Q8p766xU5n6RkCtflBgnZ3olnzFzNpyH7Nsr9Lg0pHg6sXRzu_NTBHnvtEv8-2UM6pZVJwh0iEQ6ApFa-fiacG4VN8TS3kb3RR_yXuQ_H-Q-nvnmgteo2N2nxNPsBJMaHX5ql-Cnn9UbWXz_YObAgarW8yyvNzOybpacxV45I9kt0M4mkO9bxvxPjsO2zC1roGCLiHdVd8zdys"
  },
  {
    id: "dish_4",
    title: "z8235386153320_23e0dc5c4d7bedc3520022dc04e3b465.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1WoNhKyV141XdJ-T10Y1tUPybBp_bVqAXxvXvM9ldjrYOOh0SLoEgMEpZ_En1fY09iwogAzmeLI0R98U05eu1AQrTE2u2-zRci-K3m1RypR0b44ptBrSSMH5QtksBSS0ztW-fdRIFuyANhT1w2NIB0cVS1CNI2LI88EZiRavWwpvzfYmLneY_2ZUpPlj65ud_SMpNyabnwUOkTAWhsTv8wkGVKVOa6d2VcpeHANcGoOWI6fgUru1Ij2427zO7tJNRcCQg8IO2X8wu8"
  },
  {
    id: "dish_5",
    title: "z8235386155808_6b533050b4a0bd4ee01534f93813828d.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1X7hQYzYeyutDbowUQ8r9zmNRl8bV3xEt6ZORkga8mxgHBcQKaKgRcm8iPkId4eWDzJeP0iSXCikRR5xaP1HXhhMuB6Iqk10G9z1QYkWiGzvksIGG2pntUe_VpMt7ycuqg59tGNt9O55ISX5fumHfYdCRr9ggl8X9ULs-BD1emfvUMSxTddSKILtpSUTEtWcEPK50-oUUgHRa1Du0R93oI3cIuMqYgOHpGTraWr9zRaCsO8L247gtCt3acLKzwWCEZxHI05PKDoqcQ"
  },
  {
    id: "dish_6",
    title: "z8235386094904_fe664b128c55625bd5fe6c106e3b6192.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1X5wfYeMbk6vU2Rl_BOUrysVrgWagNq4sDMtPfdu1PpLpU074KkAhMl63HUrcTaWhcATKjk8EP0pKtfF7laLZC58HtLdT5OOjkoF4-z02W6ZyXXNiQ43DmefZTgHfDNwVohw00U92pxEsX4Y9dM6dCkwPW3M0wEqzb46vW9GZ0ScWDrZdgmsn1g9mqRi3qoDIF7blk5EpCGQLj1j481Nwq6il8-t3ubfIDJsh4zOb07AAoUBKLp-i3lWGPIlR2FXeI6cgj6x5782Qs"
  },
  {
    id: "dish_7",
    title: "z8235386110414_f4730eab126abc329833de532a69d4cc.jpg",
    url: "https://lh3.googleusercontent.com/aida/AEtjO1WmszulB3aZU672kTY4OkxdpZmWdALBxSZWDg7JTnse5pv16OUvewGvzBvRUOiOQgLeRF4bo1rtPEDu8LQY7aeA4fA69CV5o2ZqTwXgF1Rsv_TmQqJvdfV1MT44gXmHhKoE7oNdC4U7vbLPHgGhOXy7SnO-0byk6714DjEVq_dL5rWINQT_mIIWKTj4r_cDmS2-h26icooHGRlzwMV0RgToSr4hoypQTZ7llPYuETJ21bYizfeYemjW5OqdaOBqwSqyldxO-yqIOoE"
  }
];

// Also check any other images used in index_stitch.html
const content = fs.readFileSync('index_stitch.html', 'utf8');
const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
let match;
let extraIdx = 1;
while ((match = imgRegex.exec(content)) !== null) {
  const url = match[1];
  if (!screens.find(s => s.url === url)) {
    screens.push({
      id: `stitch_img_${extraIdx++}`,
      title: `stitch_img_${extraIdx}.jpg`,
      url: url
    });
  }
}

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

async function downloadAll() {
  console.log(`Starting download of ${screens.length} assets...`);
  for (const item of screens) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed ${item.id} (${item.title}): HTTP ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const ext = item.title.endsWith('.png') ? '.png' : '.jpg';
      const filename = `${item.id}${ext}`;
      const dest = path.join(assetsDir, filename);
      fs.writeFileSync(dest, buffer);
      console.log(`Downloaded ${filename} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.id}:`, err.message);
    }
  }
}

downloadAll();

# KINGMC JAVA Bot Runner

Runner chạy bot AFK KingMC trên GitHub Actions sử dụng thư viện **Mineflayer**. Được điều khiển bởi **KINGMC JAVA Manager** qua GitHub REST API.

## Kiến trúc

```
Local Manager (máy bạn)          GitHub (public repo)
┌──────────────┐   PAT API      ┌────────────────────┐
│ UI dashboard │───────────────>│ Actions workflow   │
│ Port 3020    │  Upload code   │ .github/afk.yml    │
│ Webhook srv  │<───────────────│ Bot (afk-worker.js)│
│ (Cloud Bridge)│   HTTP logs    │ - Mineflayer       │
└──────────────┘                │ - auto-exit 5h40m  │
                                │ - chain self-restart│
                                └────────────────────┘
```

## Chức năng Bot

- **Tự động vượt Captcha:** Tự click kính xanh trong GUI.
- **Tự động chuyển server:** Tự mở `/menu` và chọn server SMP.
- **AFK thông minh:** Tự di chuyển nhẹ và gửi lệnh `/afk`.
- **Báo cáo tài chính:** Cào số **Money** và **Shards** từ Scoreboard gửi về Manager mỗi 30 giây.
- **Duy trì 24/7:** Tự động khởi động lại workflow mới trước khi lượt cũ kết thúc (vượt giới hạn 6h của GitHub).

## Cấu hình GitHub Actions

### Workflow permissions

Vào **Settings → Actions → General → Workflow permissions** → Chọn **Read and write permissions**. 
(Đây là bước bắt buộc để bot có thể tự trigger lượt chạy tiếp theo).

### Trigger thủ công

Mày có thể chạy bot thủ công từ tab Actions trên GitHub bằng cách điền các tham số:
- `account_id`: ID định danh tài khoản.
- `webhook_url`: URL của Manager (ví dụ: `https://afk.wanzdoan.site`).
- `webhook_token`: Token xác thực (mặc định: `zennopro11`).
- `mc_username`: Tên bot (Offline).
- `mc_password`: Mật khẩu đăng ký/đăng nhập (mặc định: `zennopro11`).

## Lưu ý bảo mật

- **Repo:** Nên dùng repo Private nếu mày muốn bảo mật tuyệt đối, nhưng bản Offline này dùng Username nên dùng Public cũng không sao.
- **Token:** Đừng bao giờ để lộ GitHub PAT của mày cho người khác.

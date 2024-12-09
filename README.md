##DTUDZ2 NGƯỜI DÙNG![](https://github.com/Truongpyeo/DTURelifeLink/raw/master/assets/images/Reliefbanner.png)
## 📝 Giới thiệu
DTUDZ2 NHÂN LỰC là một ứng dụng quản trị được xây dựng bằng Appsmith, được thiết kế hỗ trợ, thực hiện cứu hộ cứu nạn trong các tình huống khẩn cấp, và hỗ trợ các hoạt động cứu trợ hiệu quả trong ứng dụng.
##### You can visit the application using the below link

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://dz1.dzfullstack.com/app/dtudz2-nguoidung/trang-chu-6750f44df0b1ed2b4a0eb675?branch=master&environment=production)
## ⚡ Tính năng chính

1.  Đăng nhập đăng ký
    - Giúp người dùng tạo tài khoản và tham gia vào hệ thống

2. Thông tin người dùng
    - Quản lý thông tin người dùng
    - Cập nhật thông tin người dùng

3. Thông báo nguy hiểm 
    - Gửi các thông tin thiên tai đến với người dùng
    - Cập nhật tin tức thiên tai 

4. Thông tin cứu trợ
    - Gửi thông tin cần cứu trợ đến với hệ thống

5. Tin tức
    - Cập nhật tin tức thiên tai
    - Cập nhật các tin tức cứu trợ

6. Vị trí an toàn
    - Cập nhật vị trí an toàn
    - Khoanh vùng an toàn trong các tình huống thiên tai
    - Cập nhật các điểm nguy hiểm

6. Yêu cầu cứu trợ
    - Gửi yêu cầu cứu trợ đến với hệ thống
    - Theo dõi thông tin cứu trợ

7. Yêu cầu khẩn cấp
    - Gửi yêu cầu khẩn cấp đến với hệ thống
    - Theo dõi thông tin khẩn cấp

## Chức năng chính của hệ thống người dùng
1. Quản lý tài khoản
2. Theo dõi thông tin thiên tai
3. Gửi yêu cầu cứu trợ
4. Tìm kiếm địa điểm an toàn
5. Nhận hỗ trợ khẩn cấp
6. Theo dõi tin tức và cập nhật
7. Hỗ trợ phòng tránh thiên tai

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js >= 14
- Docker & Docker Compose 
- Appsmith Server

### Các bước triển khai
1. Fork các repository của ReliefLink:
   - [Repo Nhân Lực](https://github.com/Truongpyeo/DTUDZ2_NguoiDung)

2. Import vào Appsmith:
   - Truy cập Appsmith workspace
   - Click **Create New** > **Import from Git repository**
   - Cấu hình Git và Deploy keys cho từng ứng dụng
   - Kết nối MongoDB với URI có sẵn

Chi tiết dự án xem tại [DTURelifeLink/setup](https://github.com/Truongpyeo/DTURelifeLink/blob/master/docs/setup.md)

## 🧩 Plugins
### DTU AppSmith Map
 -  NPM 
```
  npm install dtuappsmithmap
```
 -  CDN
```
  <script src="https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js"></script>
```
  - AppSmith
    - Thêm URL sau vào Resource của Appsmith:
```
  https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js
```
Chi tiết hướng dẫn tại [DTUAppSmithMap](https://www.npmjs.com/package/dtuappsmithmap)

### DTU AppSmith RealTime
- NPM 
```
  npm install dtuappsmithrealtime
```
- CDN
```
  <script src="https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.5/dist/index.umd.js"></script>
```
  
- AppSmith
  - Thêm URL sau vào Resource của Appsmith:
```
  https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.5/dist/index.umd.js
```
Chi tiết hướng dẫn tại [DTUAppSmithRealTime](https://www.npmjs.com/package/dtuappsmithrealtime/v/1.1.5)

Chi tiết cách cài đặt của AppSmith tại [AppSmith](https://docs.appsmith.com/core-concepts/writing-code/ext-libraries#prerequisites)

## ⚙️ Services
### DTU ServerSocket

- Xem chi tiết tại [DTUServerSocket](https://github.com/Truongpyeo/DTUServerSocket)

- Server Demo: [ServerDemo](https://socket.thanhtruongit.io.vn/login.html)

## 🐳 Docker Appsmith
### Yêu cầu tiên quyết
 - Docker (phiên bản 20.10.7 trở lên)  [Docker]( https://docs.docker.com/get-docker/)
 - Docker-Compose (phiên bản 1.29.2 trở lên) [Docker-Compose](https://docs.docker.com/compose/install/)

Bạn sẽ cần phải khởi động lại máy tính sau khi hoàn tất quá trình cài đặt.

- Clone repo của Appsmith từ GitHub về máy tính: 
``` 
    git clone https://github.com/appsmithorg/appsmith.git

```

- Nếu git clone về không có docker-compose.yml thì bạn cần tạo 1 file docker-compose.yml và cấu hình sau: 
	version: "3"

  ```
  services:
    appsmith:
        image: index.docker.io/appsmith/appsmith-ee
        container_name: appsmith
        ports:
            - "5555:80"
            - "444:443"
        volumes:
            - ./stacks:/appsmith-stacks
        restart: unless-stopped
    mysql:
        image: mysql:latest
        ports:
            - "33088:3306" 
        container_name: mysql
        environment:
            - MYSQL_ROOT_PASSWORD=admin
            - MYSQL_DATABASE=appsmith
        volumes:
            - mysql-data:/var/lib/mysql
        restart: unless-stopped
        volumes:
        mysql-data:
  ```



- Trong thư mục appsmith, chạy lệnh sau để khởi động Appsmith trong Docker:

``` 
  cd appsmith
  docker-compose up
```
Sau khi các container đã được khởi động, bạn có thể truy cập Appsmith qua trình duyệt.

- Mở trình duyệt và vào địa chỉ:

    - Truy cập Appsmith trên cổng http://localhost:5555 (HTTP).

    - Truy cập MySQL trên cổng http://localhost:33088.

Xem chi tiết tại [Docker Appsmith](https://docs.appsmith.com/getting-started/setup/installation-guides/docker)


## 📚 Tài liệu
- [Hướng dẫn cài đặt](https://github.com/Truongpyeo/DTURelifeLink/blob/master/docs/setup.md)

## 🤝 Đóng góp
Chúng tôi rất hoan nghênh mọi đóng góp! Xem [CONTRIBUTING](https://github.com/Truongpyeo/DTUDZ2_NguoiDung/blob/master/CONTRIBUTING.md) để biết thêm chi tiết.

## 🔄 Quy trình phát triển
1. Fork repo này
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`) 
5. Tạo Pull Request

## 🐛 Báo lỗi
Nếu bạn phát hiện lỗi, vui lòng tạo issue mới với:
- Mô tả chi tiết lỗi
- Các bước tái hiện
- Screenshots nếu có
- Môi trường (browser, OS...)

## 💡Nhà phát triển

📧 Email: thanhtruong23111999@gmail.com 

📱 Hotline: +84 376 659 652

## 📞 Liên hệ
- Lê Thanh Trường       :  <u>thanhtruong23111999@gmail.com</u>
- Võ Văn Việt           :  <u>vietvo371@gmail.com</u>
- Nguyễn Ngọc Duy Thái  :  <u>kkdn011@gmail.com</u>

*" 🏫 DTU_DZ - DUY TAN UNIVERSITY - SCS ✨"*

## 📜 Changelog
Xem [CHANGELOG](https://github.com/Truongpyeo/DTUDZ2_NguoiDung/blob/master/CHANGELOG.md) để biết lịch sử thay đổi.

## ⚖️ Code of Conduct
Xem [CODE_OF_CONDUCT](https://github.com/Truongpyeo/DTUDZ2_NguoiDung/blob/master/CODE_OF_CONDUCT.md) để biết các quy tắc và hành vi được chấp nhận.

## Báo cáo lỗi & Góp ý
- Issues: [GitHub Issues](https://github.com/Truongpyeo/DTURelifeLink/issues)
- Security: Đối với các vấn đề bảo mật nhạy cảm, vui lòng liên hệ trực tiếp qua email: <u>thanhtruong23111999@gmail.com</u>

### Bug Reports & Feature Requests
- Sử dụng [GitHub Issues](https://github.com/Truongpyeo/DTUDZ2_NguoiDung/issues) để báo cáo lỗi hoặc đề xuất tính năng mới
- Xem [hướng dẫn đóng góp](https://github.com/Truongpyeo/DTUDZ2_NguoiDung/blob/master/CONTRIBUTING.md) để biết thêm chi tiết

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file [LICENSE](https://github.com/Truongpyeo/DTUDZ2_NguoiDung/blob/master/LICENSE) để biết thêm chi tiết.

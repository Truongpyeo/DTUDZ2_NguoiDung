export default {
	// Hàm mã hóa mật khẩu
	generatePasswordHash: async () => {
		// Mã hóa mật khẩu
		var password_hash = dcodeIO.bcrypt.hashSync(inp_dangKyPassword.text, 10);
		console.log(password_hash); // Kiểm tra mật khẩu đã mã hóa
		return password_hash; // Trả về mật khẩu đã mã hóa
	},
	actionDangKy: async () => {
		const hoVaTen = inp_dangKyHoVaTen.text;
		const email = inp_dangKyEmail.text;
		const soDienThoai = inp_dangKySDT.text;
		const cccd = inp_dangKyCCCD.text;
		const diaChi = inp_dangKyDiaChi.text;
		const ngaySinh = DatePicker1.formattedDate;
		const password = inp_dangKyPassword.text;
		const [checkEmal] = await findMailUser.run();
		if (checkEmal) {
			showAlert("Email đã tồn tại!", "error");
			return;
		}
		// Kiểm tra các trường bắt buộc
		if (!hoVaTen || !email || !soDienThoai || !password || !cccd || !diaChi || !ngaySinh) {
			showAlert("Vui lòng điền đầy đủ thông tin!", "error");
			return;
		}
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailPattern.test(email)) {
			showAlert("Địa chỉ email không hợp lệ!", "error");
			return;
		}

		// Kiểm tra định dạng số điện thoại (giả sử là số điện thoại Việt Nam)
		const phonePattern = /^[0-9]{10}$/;
		if (!phonePattern.test(soDienThoai)) {
			showAlert("Số điện thoại không hợp lệ!", "error");
			return;
		}

		// Kiểm tra số CCCD (giả sử là 12 chữ số)
		// const cccdPattern = /^[0-9]{12}$/;
		// if (!cccdPattern.test(cccd)) {
		// showAlert("Số CCCD không hợp lệ!", "error");
		// return;
		// }

		// Kiểm tra độ dài mật khẩu
		if (password.length < 6) {
			showAlert("Mật khẩu phải có ít nhất 6 ký tự!", "error");
			return;
		}


		// Assuming `getAdmins` is a query to fetch existing admins
		const pass = await this.generatePasswordHash();
		const uuid = UUID.genV4();
		// console.log(uuid);
		const obj = {
			id:uuid.hexNoDelim,
			// so_dien_thoai: input_sdt,
			password: pass,
		};
		await dangKy.run(obj);
		// await getUsers.run();
		showAlert("Người dùng đã được tạo thành công!", "success");
		navigateTo("Đăng Nhập");
	},
	checklogin:  async () => {
		const check = appsmith.store.id_user;
		if(check){
			navigateTo("Trang Chủ");
			showAlert("Bạn đã đăng nhập","error");
		}
	},


}
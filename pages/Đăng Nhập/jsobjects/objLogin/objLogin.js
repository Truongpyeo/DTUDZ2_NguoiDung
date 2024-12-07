export default {
	generatePasswordHash: async () => {
		var password_hash = dcodeIO.bcrypt.hashSync(input_pass.text, 10);
		console.log(password_hash);
		return password_hash;
	},

	createToken: async (user) => {
		var token = jsonwebtoken.sign(user, 'secret');
		await storeValue("tokenAdmin", token);
		// await storeValue("id_admin", 11111);
		return token;
	},
	checklogin:  async () => {
		const check = appsmith.store.id_user;
		if(check){
			navigateTo("Trang Chủ");
		}
	},
	comparePassword: async (password, hash) => {
		return dcodeIO.bcrypt.compareSync(password, hash)
	},

	actionLogin: async () => {
		try{
			const email = input_email.text;
			const password = input_pass.text;

			// Kiểm tra các trường bắt buộc
			if (!email || !password) {
				showAlert("Vui lòng điền đầy đủ thông tin!", "error");
				return;
			}

			// Kiểm tra định dạng email
			const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			if (!emailPattern.test(email)) {
				showAlert("Địa chỉ email không hợp lệ!", "error");
				return;
			}

			// Kiểm tra độ dài mật khẩu
			if (password.length < 6) {
				showAlert("Mật khẩu phải có ít nhất 6 ký tự!", "error");
				return;
			}
			const [user] = await finUser.run();
			var check = await this.comparePassword(input_pass.text, user.password);
			storeValue("id_user", user.id);

			if(check) {
				// user.token = await this.createToken(user)
				// .then( async () => await UpdateToken.run(user));
				showAlert("Đăng nhập thành công", "success");
				navigateTo('Trang Chủ');
			} else {
				showAlert("Email hoặc mật khẩu không đúng", "error");
			}
		}catch(error){
			showAlert("Email hoặc mật khẩu không đúng", "error");
		}
	},
}
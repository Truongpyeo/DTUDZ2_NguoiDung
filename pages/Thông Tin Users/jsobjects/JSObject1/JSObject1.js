export default {
	checklogin:  async () => {
		const check = appsmith.store.id_user;
		if(check === undefined){
			navigateTo("Trang Chủ");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
}
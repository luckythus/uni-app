export function Message(msg) {
    uni.showToast({
        icon: 'none',
        title: msg,
        duration: 2000
    });
}
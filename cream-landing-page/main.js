function orderNow() {
    alert('سيتم توجيهك لصفحة الطلب...');
    // هنا يمكن إضافة كود التوجيه لصفحة الطلب
}

function selectVariant(variant) {
    alert('تم اختيار: ' + variant);
    // هنا يمكن إضافة كود لحفظ اختيار المستخدم
}

function finalOrder() {
    alert('شكراً لك! سيتم التواصل معك قريباً');
    // هنا يمكن إضافة كود إرسال الطلب
}

document.addEventListener('DOMContentLoaded', function() {
    const variants = document.querySelectorAll('.variant-item');
    variants.forEach(variant => {
        variant.addEventListener('click', function() {
            variants.forEach(v => v.style.border = 'none');
            this.style.border = '2px solid #16a34a';
        });
    });
});

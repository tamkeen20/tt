const whatsappNumber = "966540915112";


    document.querySelectorAll(".specialty-btn").forEach(function(button){
      button.addEventListener("click", function(){
        const selectedField = this.getAttribute("data-field");
        const fieldSelect = document.getElementById("field");
        for (const option of fieldSelect.options) {
          if (option.text === selectedField) {
            fieldSelect.value = selectedField;
            break;
          }
        }
        document.getElementById("register").scrollIntoView({behavior:"smooth"});
      });
    });

    document.getElementById("leadForm").addEventListener("submit", function(e){
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const city = document.getElementById("city").value.trim();
      const qualification = document.getElementById("qualification").value;
      const field = document.getElementById("field").value;
      const status = document.getElementById("status").value;
      const message = document.getElementById("message").value.trim();

      const text =
`السلام عليكم، أرغب في معرفة تفاصيل برنامج الماستر المهني.

الاسم: ${name}
المدينة: ${city}
المؤهل: ${qualification}
التخصص المطلوب: ${field}
الحالة الحالية: ${status}
ملاحظات: ${message || "لا توجد"}`;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    });
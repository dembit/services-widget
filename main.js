const titles = {
  default: "Выберите дату и время",
  records: "Мои записи",
};

$(document).ready(function () {
  const $widget = $(".widget");
  const $title = $(".widget__title");
  const $back = $(".widget__back");
  const $content = $(".widget__content");
  const $records = $(".widget-records");

  function resetWidget() {
    $title.text(titles.default);
    $back.removeClass("widget__back--visible").off("click");
    $content.show();
    $records.removeClass("widget-records--active");
  }

  $("#toggleWidget").on("click", () => $widget.addClass("widget--active"));

  $(".widget__close").on("click", () => {
    $widget.removeClass("widget--active");
    resetWidget();
  });

  $(".widget-option").on("click", function () {
    const type = $(this).data("type");

    if (type === "records") {
      $title.text(titles.records);
      $content.hide();
      $records.addClass("widget-records--active");
      $back
        .addClass("widget__back--visible")
        .off("click")
        .on("click", resetWidget);
    }
  });
});

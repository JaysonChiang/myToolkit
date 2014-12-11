//---------------------------------------------------------------------
// 自訂Jquery分頁
//---------------------------------------------------------------------
    $.fn.makePager = function (_numPerPage) {
        var me = this;

        $(me).next('.pager').remove();
        var currentPage = 0,
            numPerPage  = _numPerPage || 20,
            numRows     = me.find('tbody tr').length,
            numPages    = Math.ceil(numRows / numPerPage),
            $pager      = $('<div class="pager"></div>');

        //分頁function: repaginate
        me.bind('repaginate', function () {
            me.find('tbody tr').hide()
                .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
        });

        //設定每一個分頁指示器
        for (var page = 0; page < numPages; page++) {
            $('<div class="page-number"></div>').text(page + 1)
                .bind('click', { 'newPage': page }, function (event) {
                    currentPage = event.data.newPage;
                    me.trigger('repaginate');
                    $(this).addClass('actived').siblings().removeClass('actived');
                }).appendTo($pager).addClass('clickable');
        }

        $pager.insertAfter(me).find('div.page-number:first').addClass('actived');
        me.trigger('repaginate');
        $.fancybox.update();
        return me;
    };

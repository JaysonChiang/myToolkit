            $.ajax(
            {
                 url: '@Url.Action("Create", "List")',
                    type: 'post',
                    data: { subject: subject, content: content },
                    cache: false,
                    async: false,
                    dataType: 'json',
                    success: function (data) {
                        if (data.Msg) {
                            alert(data.Msg);
                            return false;
                        }
                        else {
                            if (data.Result == 'Success') {
                                alert('Success');
                                location.href = '@Url.Action("Maintain", "List")';
                            }
                            else {
                                alert(data.ResultMessage);
                                return false;
                            }
                        }
                    },
                error :function( jqXHR ,  textStatus, errorThrown ) {
                    console.log(textStatus);
                    console.log(errorThrown);
                }
                }

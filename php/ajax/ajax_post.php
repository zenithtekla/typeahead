<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>
    $(function () {
        $('#form_id').on('click','#submit', function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "get_ajax.php",
                data: $('#form_id').serialize(),
                success: function(data) {
                    console.log(data);
                }
            });
            return false;
        });
    });
    </script>
</head>
<form method="post" id="form_id">
<input type="text" name="ime">
<input type="button" id="submit" name="submit" value="Send">
</form>
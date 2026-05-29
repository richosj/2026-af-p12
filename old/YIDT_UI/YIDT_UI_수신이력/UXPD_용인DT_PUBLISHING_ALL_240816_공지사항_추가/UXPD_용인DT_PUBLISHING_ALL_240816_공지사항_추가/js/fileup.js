(function($) {
  $.fn.fileInputPreview = function() {
    return this.each(function() {
      let $fileInput = $(this);
      let $selectedFilesContainer = $('<div class="selected-files-container"></div>');
      let $selectedFiles = $('<div class="selected-files"></div>');

      $fileInput.after($selectedFilesContainer);
      $selectedFilesContainer.append($fileInput, $selectedFiles);

      $fileInput.on('change', function(e) {
        let files = e.target.files;
        $selectedFiles.empty();

        if (files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let fileName = file.name;
            let fileSize = getFileSize(file.size);

            let $fileItem = $('<div class="file-item"><span class="name">' + fileName + ' (' + fileSize + ')</span></div>');
            let $removeButton = $('<span class="remove-button"></span>');

            $removeButton.data('fileIndex', i);
            $removeButton.on('click', function() {
              let index = $(this).data('fileIndex');
              let selectedFiles = Array.from($fileInput[0].files);

              selectedFiles.splice(index, 1);

              let dt = new DataTransfer();
              for (let i = 0; i < selectedFiles.length; i++) {
                dt.items.add(selectedFiles[i]);
              }

              $fileInput[0].files = dt.files;
              $(this).parent('.file-item').remove();
            });

            $fileItem.append($removeButton);
            $selectedFiles.append($fileItem);
          }

          $selectedFilesContainer.addClass('has-files');
        } else {
          $selectedFilesContainer.removeClass('has-files');
        }
      });


      function getFileSize(bytes) {
        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
      }
    });
  };
})(jQuery);

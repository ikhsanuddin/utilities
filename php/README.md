# PHP Helper to help my development 

### How to use

include this class in any files

```use Helper;```


Example:

```
<?php

namespace App\Http\Controllers;

use Helper;

class SomeController extends Controller
{

    public function __construct()
    {
        Helper::slugify('now i\'m using my helper class in a controller!!');
    }
    ...
}
```
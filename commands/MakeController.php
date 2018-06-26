<?php
namespace app\commands;

use Yii;
use yii\console\Controller;
use yii\console\ExitCode;

class MakeController extends Controller
{
    public $path;

    public function options($actionID)
    {
        return ['path'];
    }

    public function optionAliases()
    {
        return ['p' => 'path'];
    }

    /**
     * This command creates an empty vue.js template within the provided path.
     * @param string $name the name for template.
     * @return int Exit code
     */
    public function actionTemplate()
    {
        $path = Yii::getAlias('@app').'/'.$this->path;
        if (@file_put_contents($path, $this->basicVueTemplate()) === false) {
            echo "Unable to write the file '{$path}'.";
            return ExitCode::UNSPECIFIED_ERROR;
        }

        return ExitCode::OK;
    }

    private function basicVueTemplate()
    {
        return "<template>
    <div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted: function () {

        },
        methods: {

        },
        watch: {

        }
    }
</script>";
    }
}

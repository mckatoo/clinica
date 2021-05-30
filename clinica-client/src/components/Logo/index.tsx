import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  id = 'logo',
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <svg
      id={`paint_${id}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 45"
      role="img"
      aria-label="Uniesi - Centro de Universitário de Itapira"
    >
      <g className="text">
        <path
          d="M70.8706 13.4537l3.7636 1.2226c-.7277 2.1497-1.8125 3.7486-3.2546 4.7965-1.4326 1.039-3.2021 1.5585-5.3085 1.5585-2.6063 0-4.691-.8912-6.2541-2.6736-1.5625-1.7914-2.2439-4.2367-2.0441-7.3358.2113-3.27828 1.2187-5.82207 3.0223-7.63138C62.5993 1.57224 64.8759.6631 67.625.6631c2.401 0 4.3053.71207 5.713 2.13624.8383.84195 1.4297 2.05116 1.7744 3.62759l-3.9834.94048c-.1662-1.02109-.6007-1.82722-1.3034-2.41838-.6938-.59116-1.5673-.88674-2.6205-.88674-1.4549 0-2.6713.52397-3.6493 1.57194-.969 1.04797-1.5292 2.74534-1.6804 5.09207-.1605 2.4901.1714 4.2635.9959 5.3205.8244 1.0569 1.9506 1.5854 3.3787 1.5854 1.0532 0 1.9808-.3359 2.7828-1.0077.802-.6718 1.4146-1.7287 1.8378-3.1708zM76.2491 20.6955L77.5187.99898h3.7621L80.0112 20.6955h-3.7621zM101.676 20.6955h-3.7619l.4694-7.2821c.0993-1.5406.083-2.5348-.0488-2.9827-.1312-.45679-.3717-.8106-.7215-1.0614-.3408-.25079-.7656-.37619-1.2744-.37619-.6515 0-1.2477.17914-1.7885.53742-.5408.35828-.9284.83297-1.1629 1.42417-.2255.5912-.3896 1.6839-.4924 3.2783l-.4166 6.4625h-3.7621l.9197-14.26857h3.4944l-.1351 2.09593c1.3446-1.61226 2.9585-2.41838 4.8418-2.41838.83 0 1.5789.15226 2.2469.4568.668.29558 1.161.67626 1.479 1.14203.327.46576.538.99422.634 1.58538.105.59116.122 1.43761.051 2.53931l-.572 8.8675zM104.121 20.6954l.92-14.26848h3.762l-.92 14.26848h-3.762z"
          fill="currentColor"
        />
        <path
          d="M105.165 4.49222l.226-3.49324h3.762l-.226 3.49324h-3.762z"
          fill="#B3181C"
        />
        <path
          d="M123.413 10.6457l-3.752.6718c-.077-.7435-.326-1.3033-.748-1.67949-.413-.37619-.972-.56429-1.678-.56429-.937 0-1.708.32694-2.312.98078-.595.6449-.941 1.7287-1.04 3.2514-.109 1.6929.095 2.8886.613 3.5873.526.6986 1.266 1.048 2.221 1.048.714 0 1.312-.2016 1.793-.6046.482-.4121.849-1.1152 1.1-2.1094l3.655.6315c-.494 1.7018-1.313 2.9871-2.458 3.856-1.145.8688-2.632 1.3032-4.462 1.3032-2.08 0-3.697-.6583-4.853-1.975-1.147-1.3167-1.645-3.1395-1.495-5.4683.152-2.3557.89-4.18738 2.215-5.4951 1.326-1.31668 3.046-1.97502 5.161-1.97502 1.732 0 3.082.37619 4.051 1.12857.979.74344 1.642 1.88098 1.989 3.41265zM127.697 10.78l-3.374-.618c.472-1.37937 1.199-2.40048 2.179-3.0633.98-.66282 2.393-.99422 4.241-.99422 1.678 0 2.914.20153 3.71.6046.795.39411 1.338.90017 1.629 1.5182.3.60908.397 1.73318.291 3.37232l-.324 4.4068c-.081 1.254-.083 2.1811-.005 2.7812.087.5912.273 1.2271.56 1.9079h-3.722c-.082-.2508-.179-.6226-.29-1.1152-.048-.2239-.083-.3717-.105-.4434-.683.627-1.401 1.0973-2.153 1.4108-.752.3134-1.543.4702-2.373.4702-1.464 0-2.594-.3986-3.391-1.1958-.787-.7971-1.142-1.8048-1.063-3.023.052-.8061.29-1.5226.714-2.1496.425-.636.991-1.1197 1.7-1.4511.718-.3403 1.737-.6359 3.056-.8867 1.78-.3314 3.018-.6404 3.715-.9271l.024-.3762c.047-.7255-.098-1.2405-.436-1.54504-.337-.31349-1-.47025-1.991-.47025-.67 0-1.2.13435-1.593.40306-.391.25976-.724.72103-.999 1.38383zm4.836 3.0633c-.492.1613-1.267.3538-2.326.5778-1.059.2239-1.756.4433-2.091.6583-.513.3493-.788.7927-.822 1.3301-.034.5285.133.9853.501 1.3704.367.3852.855.5778 1.462.5778.678 0 1.34-.224 1.984-.6718.478-.3404.803-.7569.978-1.2495.119-.3225.208-.936.266-1.8407l.048-.7524zM154.229 20.6955h-3.495l.136-2.096c-.633.8151-1.36 1.4242-2.18 1.8272-.811.3942-1.618.5912-2.421.5912-1.634 0-2.992-.6583-4.077-1.975-1.075-1.3257-1.536-3.1708-1.384-5.5355.156-2.4183.842-4.25453 2.056-5.50851 1.215-1.26294 2.688-1.89442 4.42-1.89442 1.588 0 2.92.66282 3.995 1.98845l.457-7.09394h3.762l-1.269 19.69652zm-9.562-7.4433c-.098 1.5227.041 2.6244.417 3.3051.543.9853 1.359 1.4779 2.448 1.4779.866 0 1.626-.3672 2.28-1.1017.655-.7434 1.03-1.8496 1.125-3.3186.105-1.6391-.113-2.8169-.656-3.5335-.543-.72553-1.274-1.08829-2.193-1.08829-.892 0-1.665.35828-2.318 1.07479-.644.7077-1.011 1.7691-1.103 3.1843zM165.093 16.1542l3.708.6315c-.571 1.3794-1.402 2.4318-2.493 3.1574-1.082.7165-2.403 1.0748-3.965 1.0748-2.473 0-4.25-.8106-5.333-2.4318-.853-1.2988-1.216-2.9379-1.088-4.9174.152-2.3647.887-4.21431 2.205-5.5489 1.318-1.34355 2.919-2.01532 4.802-2.01532 2.116 0 3.739.70312 4.871 2.10937 1.133 1.3973 1.58 3.54255 1.339 6.43565h-9.425c-.045 1.1196.202 1.9929.742 2.6199.54.618 1.243.927 2.109.927.589 0 1.095-.1612 1.517-.4836.423-.3225.759-.842 1.011-1.5586zm.46-3.8156c.044-1.0928-.184-1.9213-.683-2.48562-.499-.57325-1.132-.85987-1.899-.85987-.822 0-1.519.30007-2.093.90019-.575.6001-.891 1.4152-.948 2.4453h5.623zM82.4961 20.6954l.9197-14.26848h3.7621l-.9197 14.26848h-3.7621z"
          fill="currentColor"
        />
        <path
          d="M83.5406 4.49222l.2251-3.49324h3.7621l-.2251 3.49324h-3.7621z"
          fill="#B3181C"
        />
        <path
          d="M76.0948 37.0753l3.8801-.3762c.1484 1.2988.5555 2.2527 1.2213 2.8618.6748.609 1.6147.9136 2.8196.9136 1.2764 0 2.2532-.2687 2.9305-.8062.6867-.5463 1.0535-1.1823 1.1003-1.9078.03-.4658-.0829-.8599-.3388-1.1823-.2464-.3314-.701-.6181-1.3638-.8599-.4537-.1612-1.4929-.4479-3.1176-.8599-2.0902-.5284-3.5389-1.1778-4.3461-1.9481-1.1351-1.0838-1.6524-2.405-1.5519-3.9635.0646-1.0032.4061-1.9392 1.0244-2.808.6279-.8778 1.4876-1.5451 2.5791-2.0019 1.1005-.4568 2.405-.6852 3.9134-.6852 2.4635 0 4.2806.5419 5.4514 1.6257 1.1797 1.0838 1.7425 2.5303 1.6883 4.3397l-3.9742.1746c-.1043-1.0121-.4235-1.7376-.9575-2.1765-.5245-.4479-1.3446-.6718-2.4603-.6718-1.1514 0-2.0682.2373-2.7504.7121-.4391.3045-.6751.712-.708 1.2226-.03.4658.1406.8643.512 1.1958.4727.4209 1.6583.8598 3.5567 1.3166 1.8985.4568 3.2915.9316 4.1791 1.4242.8971.4837 1.577 1.151 2.0399 2.0019.4723.8419.6683 1.8854.5881 3.1305-.0728 1.1285-.4533 2.1855-1.1416 3.1708-.6883.9852-1.6192 1.7197-2.7929 2.2034-1.1731.4747-2.612.7121-4.3168.7121-2.4813 0-4.3499-.5733-5.6059-1.7198-1.2554-1.1555-1.9416-2.8349-2.0584-5.0383zM97.0272 33.5686l-3.3742-.618c.4728-1.3794 1.1991-2.4005 2.179-3.0633.9799-.6628 2.3936-.9942 4.241-.9942 1.678 0 2.915.2015 3.71.6045.796.3941 1.339.9002 1.629 1.5183.3.609.397 1.7331.292 3.3723l-.325 4.4068c-.08 1.254-.082 2.1811-.005 2.7812.087.5911.274 1.2271.56 1.9078h-3.722c-.082-.2508-.179-.6225-.29-1.1151-.048-.2239-.083-.3717-.105-.4434-.683.627-1.401 1.0972-2.1526 1.4107-.7522.3135-1.5432.4703-2.3733.4703-1.4638 0-2.594-.3986-3.3905-1.1958-.7876-.7972-1.1422-1.8048-1.0636-3.023.0519-.8061.29-1.5227.7142-2.1497.4248-.6359.9915-1.1196 1.7002-1.451.7181-.3404 1.7368-.6359 3.0561-.8867 1.7795-.3315 3.0175-.6405 3.7145-.9271l.025-.3762c.046-.7255-.099-1.2405-.436-1.5451-.337-.3135-1.001-.4702-1.9918-.4702-.6694 0-1.2002.1343-1.5924.4031-.3916.2597-.7248.721-.9996 1.3838zm4.8368 3.0633c-.493.1612-1.268.3538-2.3269.5777-1.0587.224-1.7556.4434-2.0908.6584-.5134.3493-.7875.7927-.8221 1.3301-.0341.5285.1328.9853.5007 1.3704.3679.3852.8554.5777 1.4623.5777.6783 0 1.3399-.2239 1.9848-.6717.477-.3404.803-.7569.977-1.2495.119-.3225.208-.9361.266-1.8407l.049-.7524zM135.873 43.484h-3.494l.135-2.0959c-.633.8151-1.36 1.4241-2.18 1.8272-.811.3941-1.618.5912-2.421.5912-1.634 0-2.992-.6584-4.077-1.975-1.075-1.3257-1.536-3.1708-1.383-5.5355.155-2.4184.841-4.2546 2.055-5.5085 1.215-1.263 2.688-1.8944 4.42-1.8944 1.588 0 2.92.6628 3.995 1.9884l.457-7.0939h3.763l-1.27 19.6964zm-9.562-7.4433c-.098 1.5227.041 2.6245.417 3.3052.543.9853 1.359 1.4779 2.448 1.4779.866 0 1.626-.3672 2.28-1.1017.655-.7435 1.03-1.8496 1.125-3.3186.105-1.6391-.113-2.817-.656-3.5335-.543-.7255-1.273-1.0883-2.193-1.0883-.892 0-1.665.3583-2.318 1.0748-.644.7076-1.011 1.769-1.103 3.1842zM146.737 38.9428l3.708.6315c-.571 1.3794-1.402 2.4318-2.493 3.1573-1.081.7166-2.403 1.0749-3.965 1.0749-2.473 0-4.25-.8106-5.333-2.4318-.853-1.2988-1.216-2.938-1.088-4.9174.152-2.3647.887-4.2143 2.205-5.5489 1.318-1.3436 2.919-2.0153 4.802-2.0153 2.116 0 3.739.7031 4.872 2.1093 1.132 1.3973 1.579 3.5425 1.339 6.4356h-9.426c-.045 1.1197.202 1.993.742 2.62.54.618 1.243.927 2.109.927.589 0 1.095-.1612 1.517-.4837.423-.3224.76-.8419 1.011-1.5585zm.46-3.8157c.044-1.0927-.184-1.9213-.683-2.4855-.499-.5733-1.132-.8599-1.899-.8599-.821 0-1.519.3001-2.093.9002-.575.6001-.89 1.4152-.948 2.4452h5.623zM116.813 43.484l.138-2.1362c-.567.7613-1.288 1.3614-2.164 1.8003-.868.4389-1.77.6584-2.707.6584-.955 0-1.798-.2105-2.53-.6315-.732-.421-1.242-1.0121-1.532-1.7735-.291-.7613-.392-1.8138-.306-3.1573l.582-9.0287h3.762l-.422 6.5565c-.13 2.0064-.142 3.238-.038 3.6948.114.4479.346.8061.694 1.0748.349.2598.805.3897 1.368.3897.642 0 1.229-.1747 1.76-.524.532-.3583.909-.7972 1.13-1.3167.221-.5284.398-1.8138.529-3.856l.388-6.0191h3.762l-.919 14.2685h-3.495z"
          fill="currentColor"
        />
        <path
          d="M112.972 27.4689l2.107-4.0172h4.217l-3.941 4.0172h-2.383zM7.50173 3.7343c.2791.26946.99031-.10221 1.58852-.83014.59821-.72793.8569-1.53647.57779-1.80593-.27911-.26946-.99031.10221-1.58852.83014-.59821.72793-.8569 1.53647-.57779 1.80593zM6.54178 5.20486c.38248-.06105.51569-.85456.29752-1.77235-.21816-.91778-.70509-1.61231-1.08758-1.55125-.38249.06105-.5157.85455-.29753 1.77234.21817.91779.7051 1.61231 1.08759 1.55126z"
          fill="#B3181C"
        />
      </g>
      <path
        d="M10.0387 4.39555c-.06983-.3823-.86345-.49735-1.77265-.25696-.9092.24038-1.58967.74517-1.51989 1.12747.06978.3823.86341.49735 1.7726.25696.9092-.24038 1.58964-.74517 1.51994-1.12747zM5.60882 7.50807c.37412-.10137.42342-.90455.11011-1.79397-.3133-.88941-.87057-1.52825-1.24469-1.42689-.37412.10137-.42342.90455-.11011 1.79396.3133.88942.87057 1.52826 1.24469 1.4269z"
        fill="#B3181C"
      />
      <path
        d="M9.0016 6.33273c-.10947-.37258-.91076-.40261-1.78973-.06706-.87896.33555-1.50275.9096-1.39327 1.28219.10948.37258.91077.40261 1.78973.06706.87896-.33554 1.50275-.9096 1.39327-1.28219zM4.55014 9.60067c.37412-.10137.42342-.90455.11012-1.79397-.3133-.88941-.87057-1.52825-1.24469-1.42689-.37412.10137-.42342.90455-.11012 1.79396.31331.88942.87057 1.52826 1.24469 1.4269z"
        fill="#B3181C"
      />
      <path
        d="M7.94293 8.42533c-.10948-.37258-.91077-.40261-1.78973-.06706-.87896.33555-1.50275.9096-1.39328 1.28219.10948.37254.91077.40264 1.78974.06706.87896-.33554 1.50275-.9096 1.39327-1.28219zM3.93993 12.1914c.35199-.1632.26623-.9632-.19154-1.7869-.45777-.82367-1.11421-1.35908-1.46619-1.19589-.35199.1632-.26623.96319.19154 1.78689.45777.8237 1.1142 1.3591 1.46619 1.1959z"
        fill="#B3181C"
      />
      <path
        d="M7.08799 10.4602c-.17024-.3486-.96519-.2427-1.77559.2366-.81039.4792-1.32933 1.1504-1.15909 1.499.17024.3486.96519.2427 1.77558-.2366.8104-.4792 1.32934-1.1504 1.1591-1.499zM3.41298 14.4467c.32128-.1569.22343-.8826-.21855-1.621-.44197-.7384-1.06071-1.2099-1.38199-1.053-.32127.1569-.22343.8826.21855 1.621s1.06072 1.2099 1.38199 1.053z"
        fill="#B3181C"
      />
      <path
        d="M6.27997 12.7967c-.16535-.3131-.89706-.1977-1.63432.2576-.73726.4554-1.20088 1.0783-1.03553 1.3914.16534.313.89705.1977 1.63431-.2576.73726-.4554 1.20088-1.0783 1.03554-1.3914zM3.11997 16.8867c.32881-.2063.1436-.989-.41368-1.7484-.55728-.7593-1.2756-1.2077-1.60442-1.0014-.32882.2063-.1436.9891.41368 1.7484.55728.7594 1.2756 1.2077 1.60442 1.0014z"
        fill="#B3181C"
      />
      <path
        d="M6.02648 14.7726c-.21253-.3244-.988-.119-1.73206.4586-.74406.5776-1.17495 1.3088-.96242 1.6331.21253.3244.988.119 1.73206-.4586.74406-.5776 1.17495-1.3088.96242-1.6331zM3.19154 19.3765c.30133-.2285.03759-.9505-.58908-1.6125-.62667-.6621-1.37896-1.0136-1.68029-.7851-.30133.2285-.0376.9504.58908 1.6125.62666.6621 1.37896 1.0135 1.68029.7851z"
        fill="#B3181C"
      />
      <path
        d="M5.82476 17.0813c-.24265-.2854-.98278-.0125-1.65312.6094-.67035.622-1.01707 1.3576-.77442 1.6429.24265.2854.98278.0126 1.65312-.6093.67035-.622 1.01706-1.3576.77442-1.643zM3.6977 22.0278c.24635-.2703-.0985-.96-.77022-1.5404s-1.41595-.8317-1.6623-.5614c-.24634.2703.0985.96.77022 1.5404.67173.5804 1.41596.8318 1.6623.5614z"
        fill="#B3181C"
      />
      <path
        d="M5.80644 19.3647c-.26412-.2541-.90945.1204-1.44137.8366-.53192.7162-.74902 1.5028-.4849 1.7569.26413.2542.90945-.1204 1.44137-.8365.53193-.7162.74902-1.5028.4849-1.757zM4.18705 24.3389c.2208-.2952-.18363-.9459-.90332-1.4534-.71969-.5075-1.48211-.6796-1.70291-.3844-.2208.2951.18363.9458.90332 1.4533.71969.5075 1.48211.6797 1.70291.3845z"
        fill="#B3181C"
      />
      <path
        d="M6.04809 21.4624c-.28545-.2253-.89409.2157-1.35944.9849-.46535.7693-.61118 1.5755-.32572 1.8008.28545.2253.89409-.2157 1.35944-.9849.46535-.7693.61118-1.5755.32572-1.8008zM4.69488 26.7065c.19819-.2763-.18522-.8578-.85635-1.2989-.67114-.4412-1.37587-.5749-1.57405-.2987-.19819.2763.18522.8578.85635 1.2989.67114.4412 1.37587.5749 1.57405.2987z"
        fill="#B3181C"
      />
      <path
        d="M6.35908 24.0233c-.26664-.1969-.81942.2243-1.23466.9407-.41525.7165-.53572 1.4568-.26908 1.6537.26665.1969.81943-.2243 1.23467-.9407.41525-.7165.53571-1.4568.26907-1.6537zM6.18405 28.6293c.15147-.2978-.41643-.7554-1.26844-1.022-.852-.2667-1.66548-.2415-1.81695.0563s.41642.7554 1.26843 1.0221c.85201.2667 1.66549.2414 1.81696-.0564z"
        fill="#B3181C"
      />
      <path
        d="M7.36805 25.7888c-.34408-.126-.853.3814-1.13669 1.1335-.28369.752-.23473 1.4638.10935 1.5899.34409.126.853-.3815 1.1367-1.1335.28369-.752.23473-1.4638-.10936-1.5899zM7.19529 30.8392c.15447-.3284-.42467-.833-1.29353-1.1271-.86887-.2941-1.69843-.2663-1.8529.0621-.15446.3284.42467.833 1.29353 1.1271.86887.2941 1.69844.2663 1.8529-.0621z"
        fill="#B3181C"
      />
      <path
        d="M8.4027 27.7067c-.3509-.139-.86988.4206-1.15918 1.2499-.2893.8294-.23936 1.6144.11153 1.7534.3509.139.86988-.4207 1.15918-1.25.2893-.8293.23937-1.6143-.11153-1.7533zM8.90915 32.8879c.09272-.3331-.56027-.7209-1.45851-.8661-.89824-.1451-1.70157.0072-1.7943.3404-.09273.3331.56027.7208 1.4585.866.89824.1452 1.70158-.0072 1.79431-.3403z"
        fill="#B3181C"
      />
      <path
        d="M9.53529 29.7487c-.36651-.0778-.77392.5291-.90997 1.3554-.13605.8264.05078 1.5593.41729 1.637.36651.0778.77392-.5291.90997-1.3554.13602-.8264-.05077-1.5593-.41729-1.637zM10.2861 34.6703c.0811-.3481-.54248-.7294-1.39292-.8517-.85043-.1224-1.60564.0607-1.68681.4088-.08116.3481.54245.7294 1.39289.8518.85043.1223 1.60564-.0608 1.68684-.4089z"
        fill="#B3181C"
      />
      <path
        d="M10.8173 31.3976c-.3474-.0691-.7203.5725-.833 1.4331-.11267.8606.0776 1.6142.425 1.6833.3474.0691.7203-.5725.833-1.4331.1127-.8606-.0776-1.6142-.425-1.6833zM11.9876 36.4383c.0477-.385-.6751-.7343-1.6146-.7802-.93939-.0458-1.73966.2291-1.78741.6141-.04775.385.6751.7342 1.61451.7801.9395.0459 1.7397-.229 1.7875-.614z"
        fill="#B3181C"
      />
      <path
        d="M12.1846 32.8418c-.386-.0394-.7171.693-.7394 1.636-.0223.9429.2726 1.7393.6586 1.7788.386.0394.7171-.693.7394-1.636.0223-.9429-.2726-1.7393-.6586-1.7788zM13.958 37.9547c.0134-.3787-.7118-.6295-1.6197-.5602-.9079.0694-1.6547.4326-1.6681.8114-.0134.3787.7117.6295 1.6196.5602.9079-.0694 1.6548-.4327 1.6682-.8114z"
        fill="#B3181C"
      />
      <path
        d="M13.8425 34.4546c-.3737.0087-.6294.7568-.5711 1.6709.0583.9141.4085 1.6481.7822 1.6394.3737-.0087.6293-.7568.571-1.6709-.0583-.9141-.4085-1.648-.7821-1.6394zM16.3261 39.2337c-.0537-.3622-.8048-.5293-1.6777-.3731-.8729.1561-1.5369.5764-1.4832.9386.0537.3622.8049.5293 1.6777.3731.8729-.1561 1.5369-.5763 1.4832-.9386z"
        fill="#B3181C"
      />
      <path
        d="M15.597 35.9096c-.3634.0452-.4812.7838-.2632 1.6496.2181.8659.6894 1.5311 1.0527 1.4859.3633-.0452.4811-.7838.2631-1.6497-.218-.8658-.6893-1.531-1.0526-1.4858zM18.4206 40.309c-.0888-.358-.8471-.4536-1.6937-.2136-.8467.2401-1.4611.7249-1.3723 1.0829.0888.358.8472.4536 1.6938.2136.8467-.2401 1.461-.7249 1.3722-1.0829z"
        fill="#B3181C"
      />
      <path
        d="M17.3714 37.045c-.3545.0801-.398.8321-.0971 1.6797.3009.8475.8322 1.4696 1.1867 1.3895.3546-.0801.398-.8322.0971-1.6797-.3009-.8476-.8322-1.4697-1.1867-1.3895zM20.5711 41.4072c-.0883-.3285-.7799-.3967-1.5445-.1525-.7647.2442-1.3129.7085-1.2246 1.0369.0884.3285.7799.3967 1.5446.1525.7646-.2442 1.3129-.7085 1.2245-1.0369z"
        fill="#B3181C"
      />
      <path
        d="M19.5474 38.4187c-.3207.0834-.3442.7795-.0525 1.5548.2917.7752.7881 1.336 1.1087 1.2526.3206-.0834.3441-.7795.0524-1.5548-.2916-.7752-.788-1.336-1.1086-1.2526zM22.9122 42.0847c-.0888-.358-.8472-.4537-1.6938-.2136-.8467.24-1.461.7249-1.3722 1.0829.0888.358.8471.4536 1.6938.2135.8466-.24 1.461-.7248 1.3722-1.0828z"
        fill="#B3181C"
      />
      <path
        d="M21.8629 38.8206c-.3545.0801-.398.8322-.0971 1.6797.301.8476.8323 1.4697 1.1868 1.3896.3545-.0802.3979-.8322.097-1.6798-.3009-.8475-.8322-1.4696-1.1867-1.3895zM25.2728 42.3065c-.1353-.3117-.8294-.2771-1.5502.0772-.7208.3544-1.1954.8943-1.0601 1.206.1353.3117.8294.2771 1.5502-.0772.7208-.3544 1.1954-.8943 1.0601-1.206z"
        fill="#B3181C"
      />
      <path
        d="M23.823 39.5017c-.3051.1299-.2267.8219.175 1.5456.4018.7237.9748 1.2051 1.2799 1.0753.3051-.1299.2268-.8219-.175-1.5456-.4018-.7237-.9748-1.2052-1.2799-1.0753zM28.016 42.1219c-.2103-.3213-.934-.1202-1.6163.4493-.6824.5695-1.065 1.2916-.8547 1.6129.2104.3213.934.1201 1.6164-.4493.6823-.5695 1.065-1.2916.8546-1.6129z"
        fill="#B3181C"
      />
      <path
        d="M28.0236 41.8349c-.1827.3367-.8111.1259-1.4037-.471-.5925-.5968-.9248-1.3536-.7422-1.6904.1827-.3367.8111-.1259 1.4037.4709.5925.5969.9248 1.3537.7422 1.6905zM48.5374 3.7343c-.2776.26946-.9851-.10221-1.5802-.83014-.5951-.72793-.8524-1.53647-.5748-1.80593.2777-.26946.9852.10221 1.5803.83014.595.72793.8524 1.53647.5747 1.80593zM49.4924 5.20486c-.3805-.06105-.513-.85456-.296-1.77235.217-.91778.7014-1.61231 1.0819-1.55125.3805.06105.513.85455.2959 1.77234-.217.91779-.7014 1.61231-1.0818 1.55126z"
        fill="#B3181C"
      />
      <path
        d="M46.0138 4.39555c.0694-.3823.8589-.49735 1.7633-.25696.9044.24038 1.5814.74517 1.5119 1.12747-.0694.3823-.8588.49735-1.7633.25697-.9044-.24039-1.5813-.74518-1.5119-1.12748zM50.4204 7.50807c-.3721-.10136-.4212-.90455-.1095-1.79396.3117-.88942.866-1.52825 1.2382-1.42689.3721.10136.4212.90455.1095 1.79396-.3117.88941-.866 1.52826-1.2382 1.42689z"
        fill="#B3181C"
      />
      <path
        d="M47.0454 6.33273c.1089-.37258.906-.40261 1.7804-.06706.8743.33554 1.4949.9096 1.386 1.28219-.1089.37258-.906.40261-1.7804.06706s-1.4949-.9096-1.386-1.28219zM51.4736 9.60067c-.3722-.10137-.4212-.90455-.1096-1.79397.3117-.88941.866-1.52825 1.2382-1.42688.3722.10136.4212.90454.1095 1.79396-.3116.88941-.866 1.52825-1.2381 1.42689z"
        fill="#B3181C"
      />
      <path
        d="M48.0985 8.42533c.1089-.37258.906-.40261 1.7804-.06706s1.4949.9096 1.386 1.28219c-.1089.37254-.906.40264-1.7804.06706-.8744-.33554-1.4949-.9096-1.386-1.28219zM52.0806 12.1914c-.3502-.1632-.2649-.9632.1905-1.7869.4554-.82366 1.1084-1.35908 1.4585-1.19589.3502.1632.2649.96319-.1905 1.78689-.4554.8237-1.1084 1.3591-1.4585 1.1959z"
        fill="#B3181C"
      />
      <path
        d="M48.949 10.4602c.1693-.3486.9601-.2427 1.7663.2366.8061.4792 1.3224 1.1504 1.153 1.499-.1693.3486-.9601.2427-1.7663-.2366-.8061-.4792-1.3224-1.1504-1.153-1.499zM52.6048 14.4467c-.3196-.1569-.2223-.8826.2174-1.621.4396-.7384 1.0551-1.2099 1.3747-1.053.3196.1569.2223.8826-.2174 1.621-.4396.7384-1.0551 1.2099-1.3747 1.053z"
        fill="#B3181C"
      />
      <path
        d="M49.7528 12.7967c.1645-.3131.8924-.1978 1.6258.2576.7334.4553 1.1946 1.0783 1.0301 1.3914-.1645.313-.8924.1977-1.6258-.2576-.7334-.4554-1.1946-1.0783-1.0301-1.3914zM52.8963 16.8867c-.3271-.2063-.1429-.989.4115-1.7484.5543-.7593 1.2689-1.2077 1.596-1.0014.3271.2063.1429.9891-.4115 1.7484-.5544.7594-1.2689 1.2077-1.596 1.0014z"
        fill="#B3181C"
      />
      <path
        d="M50.005 14.7726c.2114-.3244.9828-.119 1.723.4586.7401.5776 1.1688 1.3088.9573 1.6331-.2114.3244-.9828.119-1.723-.4586-.7401-.5776-1.1688-1.3088-.9573-1.6331zM52.8251 19.3765c-.2998-.2285-.0374-.9504.586-1.6125.6233-.6621 1.3717-1.0136 1.6715-.7851.2997.2285.0373.9504-.586 1.6125-.6234.6621-1.3718 1.0136-1.6715.7851z"
        fill="#B3181C"
      />
      <path
        d="M50.2056 17.0813c.2414-.2854.9777-.0125 1.6445.6094.6668.622 1.0117 1.3576.7704 1.643-.2414.2853-.9777.0125-1.6445-.6094-.6669-.622-1.0118-1.3576-.7704-1.643zM52.3215 22.0278c-.245-.2703.098-.96.7662-1.5404s1.4086-.8317 1.6536-.5614c.2451.2703-.0979.96-.7662 1.5404-.6682.5804-1.4085.8318-1.6536.5614z"
        fill="#B3181C"
      />
      <path
        d="M50.2238 19.3647c.2628-.2541.9047.1204 1.4339.8366.5291.7162.7451 1.5028.4823 1.7569-.2627.2542-.9047-.1204-1.4338-.8365-.5291-.7162-.7451-1.5028-.4824-1.757zM51.8348 24.3389c-.2197-.2952.1826-.9459.8985-1.4534.716-.5075 1.4744-.6796 1.694-.3845.2197.2952-.1826.9459-.8985 1.4534-.716.5075-1.4744.6796-1.694.3845z"
        fill="#B3181C"
      />
      <path
        d="M49.9834 21.4624c.284-.2253.8895.2157 1.3524.9849.4629.7693.608 1.5755.324 1.8008-.284.2253-.8894-.2157-1.3523-.9849-.4629-.7693-.608-1.5755-.3241-1.8008zM51.3296 26.7065c-.1972-.2763.1842-.8578.8519-1.2989.6676-.4412 1.3686-.5749 1.5658-.2987.1971.2763-.1843.8578-.8519 1.2989-.6676.4412-1.3687.5749-1.5658.2987z"
        fill="#B3181C"
      />
      <path
        d="M49.6741 24.0233c.2652-.1969.8151.2243 1.2282.9407.4131.7165.5329 1.4568.2676 1.6537-.2652.1969-.8151-.2243-1.2282-.9407-.413-.7165-.5329-1.4568-.2676-1.6537zM49.8482 28.6293c-.1507-.2978.4142-.7554 1.2618-1.022.8475-.2667 1.6568-.2415 1.8074.0563.1507.2978-.4142.7554-1.2618 1.0221-.8475.2667-1.6567.2414-1.8074-.0564z"
        fill="#B3181C"
      />
      <path
        d="M48.6704 25.7888c.3423-.126.8485.3814 1.1307 1.1335.2823.752.2335 1.4638-.1087 1.5899-.3423.126-.8486-.3815-1.1308-1.1335s-.2335-1.4638.1088-1.5899zM48.8423 30.8392c-.1537-.3284.4224-.833 1.2867-1.1271.8643-.2941 1.6896-.2663 1.8432.0621.1537.3284-.4224.833-1.2867 1.1271-.8644.2941-1.6896.2663-1.8432-.0621z"
        fill="#B3181C"
      />
      <path
        d="M47.6412 27.7067c.349-.139.8653.4206 1.1531 1.2499.2878.8294.2381 1.6144-.111 1.7534-.349.139-.8653-.4207-1.1531-1.25-.2878-.8293-.2381-1.6143.111-1.7533zM47.1374 32.8879c-.0923-.3331.5573-.7209 1.4508-.8661.8936-.1451 1.6927.0072 1.785.3404.0922.3331-.5574.7208-1.4509.866-.8936.1452-1.6927-.0072-1.7849-.3403z"
        fill="#B3181C"
      />
      <path
        d="M46.5145 29.7487c.3646-.0778.7699.5291.9052 1.3554.1353.8264-.0505 1.5593-.4151 1.637-.3646.0778-.7699-.5291-.9052-1.3554-.1353-.8264.0505-1.5593.4151-1.637zM45.7676 34.6703c-.0807-.3481.5397-.7294 1.3856-.8517.846-.1224 1.5973.0607 1.678.4088.0808.3481-.5396.7294-1.3856.8518-.846.1223-1.5972-.0608-1.678-.4089z"
        fill="#B3181C"
      />
      <path
        d="M45.2392 31.3976c.3456-.0691.7166.5725.8286 1.4331.1121.8606-.0772 1.6142-.4227 1.6833-.3456.0691-.7166-.5725-.8287-1.4331-.112-.8606.0772-1.6142.4228-1.6833zM44.075 36.4383c-.0475-.385.6716-.7343 1.6061-.7802.9345-.0458 1.7306.2291 1.7781.6141.0475.3849-.6715.7342-1.6061.7801-.9345.0459-1.7306-.229-1.7781-.614z"
        fill="#B3181C"
      />
      <path
        d="M43.879 32.8418c.3841-.0394.7134.693.7356 1.636.0221.9429-.2712 1.7393-.6552 1.7788-.384.0394-.7133-.693-.7355-1.636-.0222-.9429.2711-1.7393.6551-1.7788zM42.1149 37.9547c-.0133-.3787.7081-.6295 1.6112-.5602.9032.0694 1.6461.4326 1.6595.8114.0133.3787-.7081.6295-1.6112.5602-.9032-.0694-1.6461-.4327-1.6595-.8114z"
        fill="#B3181C"
      />
      <path
        d="M42.2298 34.4546c.3718.0087.6261.7568.5681 1.6709-.058.9141-.4063 1.6481-.7781 1.6394-.3717-.0087-.626-.7568-.568-1.6709.058-.9141.4063-1.6481.778-1.6394zM39.7592 39.2337c.0534-.3622.8006-.5293 1.6689-.3731.8683.1561 1.5289.5764 1.4755.9386-.0535.3622-.8007.5293-1.669.3731-.8683-.1561-1.5289-.5763-1.4754-.9386z"
        fill="#B3181C"
      />
      <path
        d="M40.4845 35.9096c.3615.0452.4787.7838.2618 1.6497-.2169.8658-.6857 1.531-1.0472 1.4858-.3614-.0452-.4786-.7838-.2617-1.6496.2169-.8659.6857-1.5311 1.0471-1.4859zM37.6756 40.309c.0884-.358.8427-.4536 1.685-.2136.8422.2401 1.4533.7249 1.365 1.0829-.0883.358-.8427.4536-1.6849.2136-.8422-.2401-1.4534-.7249-1.3651-1.0829z"
        fill="#B3181C"
      />
      <path
        d="M38.7194 37.045c.3527.0801.3959.8321.0966 1.6797-.2994.8475-.8279 1.4697-1.1806 1.3895-.3526-.0801-.3958-.8322-.0965-1.6797.2993-.8476.8279-1.4697 1.1805-1.3895zM35.5364 41.4072c.0879-.3285.7758-.3967 1.5365-.1525.7606.2442 1.306.7085 1.2181 1.0369-.0879.3285-.7758.3967-1.5365.1525-.7606-.2442-1.306-.7085-1.2181-1.0369z"
        fill="#B3181C"
      />
      <path
        d="M36.5548 38.4187c.319.0834.3423.7795.0522 1.5548-.2902.7752-.784 1.336-1.1029 1.2526-.319-.0834-.3423-.7795-.0522-1.5548.2902-.7752.7839-1.336 1.1029-1.2526zM33.2076 42.0847c.0883-.358.8427-.4537 1.6849-.2136.8423.24 1.4534.7249 1.3651 1.0829-.0884.358-.8427.4536-1.6849.2135-.8423-.24-1.4534-.7248-1.3651-1.0828z"
        fill="#B3181C"
      />
      <path
        d="M34.2514 38.8206c.3526.0801.3959.8322.0965 1.6797-.2993.8476-.8278 1.4697-1.1805 1.3896-.3526-.0802-.3959-.8322-.0965-1.6798.2993-.8475.8278-1.4696 1.1805-1.3895zM30.8593 42.3065c.1347-.3117.8251-.2771 1.5421.0773.717.3543 1.1892.8942 1.0546 1.2059-.1347.3117-.8251.2771-1.5421-.0772-.717-.3544-1.1892-.8943-1.0546-1.206z"
        fill="#B3181C"
      />
      <path
        d="M32.3015 39.5017c.3035.1299.2256.8219-.1741 1.5456-.3996.7237-.9697 1.2051-1.2732 1.0753-.3035-.1299-.2255-.8219.1741-1.5456.3997-.7237.9697-1.2052 1.2732-1.0753zM28.1305 42.1219c.2092-.3213.9291-.1201 1.6078.4493.6788.5695 1.0595 1.2916.8502 1.6129-.2092.3213-.9291.1201-1.6078-.4493-.6788-.5695-1.0595-1.2916-.8502-1.6129z"
        fill="#B3181C"
      />
      <path
        d="M28.1229 41.8349c.1817.3367.8069.1259 1.3963-.471.5895-.5968.92-1.3536.7383-1.6904-.1816-.3367-.8068-.1259-1.3962.471-.5895.5968-.9201 1.3536-.7384 1.6904zM28.0258 31.8318l.7871 1.8836 2.0337.0795-1.5418 1.3332.5531 1.9656-1.74-1.0595-1.6919 1.1352.4664-1.9881-1.5987-1.2639 2.0283-.1692.7038-1.9164zM22.0222 31.703l.5825 1.3939 1.505.0589-1.141.9866.4093 1.4546-1.2877-.7841-1.252.8401.3452-1.4712-1.1831-.9354 1.501-.1252.5208-1.4182zM17.8899 31.4777l.4734 1.1327 1.223.0478-.9272.8018.3326 1.182-1.0464-.6372-1.0175.6827.2806-1.1955-.9615-.7601 1.2198-.1017.4232-1.1525zM34.0299 31.703l-.5825 1.3939-1.505.0589 1.141.9866-.4092 1.4546 1.2876-.7841 1.252.8401-.3452-1.4712 1.1831-.9354-1.501-.1252-.5208-1.4182zM38.1622 31.4777l-.4733 1.1327-1.2231.0478.9273.8018-.3327 1.182 1.0464-.6372 1.0175.6827-.2806-1.1955.9615-.7601-1.2198-.1017-.4232-1.1525z"
        fill="#B3181C"
      />
      <path
        opacity=".95"
        d="M40.3416 11.6597v7.6233c0 .521-.418.9404-.9372.9404H17.5747c-.5192 0-.9372-.4194-.9372-.9404v-7.6233c0-.521.418-.9405.9372-.9405h21.8297c.5192 0 .9372.4195.9372.9405zm-6.4899-9.65656c.5926 0 1.0099.47494.9355 1.06492-2.8474 14.39074 3.561 25.87144-11.6599 25.87144-.5925 0-1.0098-.4749-.9355-1.0649 2.8475-14.3907-3.5609-25.87146 11.6599-25.87146z"
        fill="#14C09E"
        fillOpacity=".95294"
        stroke="#14C09E"
        strokeOpacity=".95294"
        strokeWidth=".322"
        strokeMiterlimit="5.2"
      />
      <path
        d="M33.0135 3.52433c-4.4446 6.45139-4.4289 13.85097-9.0479 23.89407 9.0479-10.0431 0-17.44268 9.0479-23.89407z"
        fill="#fff"
        stroke="#fff"
        strokeWidth=".322"
        strokeMiterlimit="5.2"
        strokeLinejoin="round"
      />
    </svg>
  </S.Wrapper>
)

export default Logo

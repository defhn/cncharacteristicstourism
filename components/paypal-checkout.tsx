"use client"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Shield } from "lucide-react"

interface PayPalCheckoutProps {
  amount: string
  currency?: string
  planName: string
  planDetails: string[]
  onSuccess?: (details: any) => void
  onError?: (error: any) => void
  onCancel?: () => void
}

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
  currency: "USD",
  intent: "capture",
}

export default function PayPalCheckout({
  amount,
  currency = "USD",
  planName,
  planDetails,
  onSuccess,
  onError,
  onCancel,
}: PayPalCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showPayPal, setShowPayPal] = useState(false)

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: currency,
          },
          description: `${planName} - 中华文化之旅`,
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    })
  }

  const onApprove = async (data: any, actions: any) => {
    setIsLoading(true)
    try {
      const details = await actions.order.capture()
      console.log("Payment successful:", details)
      
      // 这里可以调用后端API保存订单信息
      // await saveOrder(details)
      
      if (onSuccess) {
        onSuccess(details)
      }
    } catch (error) {
      console.error("Payment error:", error)
      if (onError) {
        onError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const onErrorHandler = (error: any) => {
    console.error("PayPal error:", error)
    if (onError) {
      onError(error)
    }
  }

  const onCancelHandler = () => {
    console.log("Payment cancelled")
    if (onCancel) {
      onCancel()
    }
  }

  if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
    return (
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-6 text-center">
          <p className="text-red-600">PayPal 配置错误，请联系管理员</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>订单确认</span>
          <Badge className="bg-amber-600 text-white">安全支付</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 订单详情 */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">{planName}</h3>
          <ul className="space-y-2">
            {planDetails.map((detail, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 价格信息 */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>总计:</span>
            <span className="text-amber-600">
              {currency === "USD" ? "$" : "¥"}{amount}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {currency === "USD" ? "美元" : "人民币"} • 包含所有费用
          </p>
        </div>

        {/* 支付按钮 */}
        {!showPayPal ? (
          <div className="space-y-3">
            <Button
              onClick={() => setShowPayPal(true)}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
              size="lg"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              立即支付
            </Button>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Shield className="h-4 w-4 mr-1" />
              <span>PayPal 安全支付保护</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onErrorHandler}
                onCancel={onCancelHandler}
                disabled={isLoading}
                style={{
                  layout: "vertical",
                  color: "gold",
                  shape: "rect",
                  label: "paypal",
                }}
              />
            </PayPalScriptProvider>
            
            {isLoading && (
              <div className="text-center text-sm text-gray-600">
                正在处理支付，请稍候...
              </div>
            )}

            <Button
              variant="outline"
              onClick={() => setShowPayPal(false)}
              className="w-full"
              disabled={isLoading}
            >
              返回
            </Button>
          </div>
        )}

        {/* 支付说明 */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">支付说明:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• 支持 PayPal 账户和信用卡支付</li>
            <li>• 支付成功后将收到确认邮件</li>
            <li>• 如有问题请联系客服: +86 400-123-4567</li>
            <li>• 支持7天无理由退款</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

// 使用示例组件
export function PaymentExample() {
  const handleSuccess = (details: any) => {
    alert(`支付成功！订单号: ${details.id}`)
    // 这里可以跳转到成功页面或执行其他操作
  }

  const handleError = (error: any) => {
    alert("支付失败，请重试")
  }

  const handleCancel = () => {
    alert("支付已取消")
  }

  return (
    <div className="max-w-md mx-auto">
      <PayPalCheckout
        amount="2888"
        currency="USD"
        planName="3天经典中华文化之旅"
        planDetails={[
          "义乌国际商贸城 + 横店影视城",
          "四星级酒店住宿（2晚）",
          "专业导游全程陪同",
          "所有景点门票",
          "接送机服务",
          "旅游意外保险",
          "6餐（3早3正）"
        ]}
        onSuccess={handleSuccess}
        onError={handleError}
        onCancel={handleCancel}
      />
    </div>
  )
}
